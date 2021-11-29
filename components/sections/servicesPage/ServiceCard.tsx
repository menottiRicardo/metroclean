import Image from "next/image";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
  useElementScroll,
} from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import {
  ArrowNarrowRightIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";

interface ServiceCardProps {
  title: string;
  descripcion: string;
}
function ServiceCard({ title, descripcion }: ServiceCardProps) {
  return (
    <div>
      <div className="grid grid-cols-1 shadow-md rounded-md p-2 md:grid-cols-2 my-5 md:gap-2 h-full">
        {/* left section */}

        <span className="w-full h-40 bg-sky-300 md:h-full rounded-sm" />
        {/* right section */}
        <div className="p-2 h-full w-full">
          {/* <span className="w-20 h-20 bg-sky-300 md:h-5/6 rounded-sm absolute" /> */}
          <h1 className="text-black md:text-3xl font-bold text-lg my-1 md:mb-4">
            {title}
          </h1>
          <p className="text-gray-700 font-light text-sm hidden md:inline-flex text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate dolorem, explicabo eum debitis dolor accusamus?
            Quae dolorum vero repudiandae numquam vel iusto officia!
            Quidem voluptatem maiores esse cum placeat obcaecati?
          </p>
          <div className="flex justify-center items-center mt-6">
            <p className="text-black flex text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate dolorem, explicabo eum debitis dolor
              accusamus? Quae dolorum vero repudiandae numquam vel
              iusto officia! Quidem voluptatem maiores esse cum
              placeat obcaecati?
            </p>
          </div>

          <div className="sm:hidden flex justify-end items-end p-1">
            <p className="font-medium text-gray-400">Ver mas</p>
            <ChevronRightIcon className="h-5 w-5 text-gray-400" />
          </div>
          {/* <ArrowNarrowRightIcon */}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
