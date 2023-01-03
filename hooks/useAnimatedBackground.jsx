import React, { useRef, useEffect } from "react";

const fullAnimationSteps = [0, 32];

const animationKeyframes = (from, to) => [
  { transform: `translateX(${from}px)` },
  { transform: `translateX(${to}px)` },
];

const initialLinearOptions = (index) => ({
  duration: 1500,
  // iterations: (index * 1) % 3,
  fill: "both",
  delay: index * 1 * 150,
  easing: "linear",
});

const staticAnimationKeyframes = [{}];

const animationOptions = ({
  index,
  duration,
  iterations = 1,
  delay = 0,
  ease = "ease",
}) => ({
  duration: duration,
  iterations: `${iterations}`,
  fill: "both",
  delay: 0,
  easing: `${ease}`,
});

const createAnimatedElement = (element, initialAnimation, animations) => {
  const queue = [];
  let lastAnimation = -1;
  let isActive = false;
  let currentAnimation = undefined;

  const queueAnimation = (animationArray) => {
    queue.push(animationArray);
  };

  const playAnimation = () => {
    if (isActive === false) return currentAnimation.cancel();
    if (currentAnimation !== undefined) currentAnimation = undefined;

    if (queue.length !== 0) {
      currentAnimation = element.animate(...queue[0]);
      queue.shift();
    }

    lastAnimation = (lastAnimation + 1) % 4;
    queueAnimation(animations[lastAnimation]);

    return currentAnimation.finished.then(() => playAnimation());
  };

  const initializeAnimation = () => {
    isActive = true;
    queueAnimation(initialAnimation);
    playAnimation();
  };

  const clearAnimation = () => {
    isActive = false;
  };

  const getElement = () => element;

  const getAnimation = () => currentAnimation;

  return {
    initializeAnimation,
    queueAnimation,
    clearAnimation,
    getElement,
    getAnimation,
  };
};

const useAnimatedBackground = (ref) => {
  const backgroundElements = useRef(undefined);

  useEffect(() => {
    const animatedElements = Array.from(ref.current.children);

    backgroundElements.current = animatedElements.map((element, index) => {
      return createAnimatedElement(
        element,
        [animationKeyframes(0, 0), initialLinearOptions(index)],
        [
          [
            animationKeyframes(
              fullAnimationSteps[index % 2],
              fullAnimationSteps[(index + 1) % 2]
            ),
            animationOptions({ index, duration: 1500 }),
          ],
          [
            staticAnimationKeyframes,
            animationOptions({ index, duration: 6000 }),
          ],
          [
            animationKeyframes(
              fullAnimationSteps[(index + 1) % 2],
              fullAnimationSteps[index % 2]
            ),
            animationOptions({ index, duration: 1500 }),
          ],
          [
            staticAnimationKeyframes,
            animationOptions({ index, duration: 6000 }),
          ],
        ]
      );
    });

    const onVisibilityChange = (e) => {
      if (document.visibilityState === "hidden")
        return backgroundElements.current.forEach((animation) =>
          animation.getAnimation().pause()
        );

      if (document.visibilityState === "visible")
        return backgroundElements.current.forEach((animation) =>
          animation.getAnimation().play()
        );
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    backgroundElements.current.forEach((element) =>
      element.initializeAnimation()
    );

    return () => {
      backgroundElements.current.forEach((element) => element.clearAnimation());
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return backgroundElements;
};

export default useAnimatedBackground;
