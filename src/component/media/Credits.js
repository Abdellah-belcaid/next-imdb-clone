"use client";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ActorCard from "./ActorCard";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function Credits({ actors }) {
  return (
    <div className="px-6 py-4">
      <h2 className="text-3xl p-1 font-semibold inline-block border-b-2 border-blue-500 ml-2 mt-4">
        Main Actors
      </h2>
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        navigation={true}
        pagination={{
          type: "progressbar",
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="grid grid-cols-4 grid-flow-col gap-1 overflow-x-auto pt-2 overscroll-x-contain no-scrollbar"
      >
        {actors.map((actor, index) => (
          <SwiperSlide key={actor.id} className="min-h-[200px] max-w-[250px]">
            <ActorCard actor={actor} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Credits;
