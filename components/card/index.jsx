import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "../shared/button";
import GithubIcon from "../icons/GithubIcon";
import NewTabIcon from "../icons/NewTabIcon";
import ExternalLink from "../shared/external-link";
import HorizontalLine from "../shared/horizontal-line";
import ExpandIcon from "../icons/ExpandIcon";
import { Disclosure, Transition } from "@headlessui/react";

import Tag from "../shared/tag";
import ContractIcon from "../icons/ContractIcon";

const Card = ({
  title = "Navn på prosjektet",
  description = "Lorem ipsum dolor sit amet.",
  tags = ["This", "is", "placeholder"],
  github = undefined,
  link = undefined,
  popoverContent,
}) => {
  return (
    <article className="mx-auto flex flex-col max-w-screen-lg text-th-contrast">
      <HorizontalLine></HorizontalLine>
      <div className=" px-5 pt-10 pb-8 xs:px-10 xs:pt-10 xs:pb-8  sm:pt-20 flex flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <div className="sm:flex-1 sm:basis-1/2 md:basis-1/3 flex flex-col gap-4">
            <h2 className="text-base xs:text-xl md:text-2xl font-semibold">
              {title}
            </h2>
            <div className="flex gap-2 flex-wrap text-sm xs:text-base ">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <div className="sm:flex-1 sm:basis-1/2 md:basis-2/3 flex flex-col gap-4 xs:gap-8 ">
            <p className="text-sm xs:text-base sm:text-lg ">{description}</p>
            <div className="flex gap-2 text-sm xs:text-base ">
              <ExternalLink href={github} behavior="new-tab" style="hollow">
                <div className="flex gap-2 ">
                  Github
                  <GithubIcon className="text-[1.5em] self-center" />
                </div>
              </ExternalLink>
              <ExternalLink href={link} behavior="new-tab" style="hollow">
                <div className="flex gap-2 ">
                  Link
                  <NewTabIcon className="text-[1.5em] self-center" />
                </div>
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>

      <Disclosure
        as="div"
        className="w-full mb-5 xs:mb-10 sm:mb-20 text-sm xs:text-base"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="ml-5 xs:ml-10 flex gap-2 group hover:underline underline-offset-4 w-fit">
              Les mer
              {open ? (
                <ContractIcon className="text-[1.5em] self-center" />
              ) : (
                <ExpandIcon className="text-[1.5em] self-center " />
              )}
            </Disclosure.Button>
            <Transition
              appear={true}
              unmount={false}
              show={open}
              enter="transition duration-200"
              enterFrom="opacity-0 -translate-y-2"
              leave="transition duration-200"
              leaveTo="opacity-0 -translate-y-2"
            >
              <Disclosure.Panel
                className=" mt-2 xs:mt-4 p-2 xs:p-4 bg-th-background-shaded rounded grid md:grid-cols-2 gap-2 xs:gap-8 "
                as="div"
              >
                {popoverContent}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </article>
  );
};

export default Card;
