"use client";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Card from "../media/Card";

function MediaSection({ media, title, type }) {
  return (
    <div className="px-6 py-2 mb-4">
      <h2 className="text-2xl p-1 font-semibold ml-2 mt-4 mb-4 capitalize">
        {title} {type}s
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
        {media.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="min-h-[300px] max-w-[320px] mt-2 mb-2"
          >
            <Card key={item.id} result={item} type={type} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MediaSection;
