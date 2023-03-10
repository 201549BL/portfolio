function ExpandIcon(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="text-[24px]"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 14.95q-.2 0-.375-.063q-.175-.062-.325-.212L6.675 10.05q-.275-.275-.262-.688q.012-.412.287-.687q.275-.275.7-.275q.425 0 .7.275l3.9 3.9l3.925-3.925q.275-.275.688-.263q.412.013.687.288q.275.275.275.7q0 .425-.275.7l-4.6 4.6q-.15.15-.325.212q-.175.063-.375.063Z"
      ></path>
    </svg>
  );
}

export default ExpandIcon;
