"use client";

import React from "react";
import Image from "next/image";
// オプションをインポートする
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderImage(props: { images: { src: string }[] }) {
  const { images } = props;
  const slideSettings = {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={slideSettings}
        centeredSlides={false} // スライドを中央に配置
        loop={true} // スライドをループさせる
        speed={1000} // スライドが切り替わる時の速度
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} // スライド表示時間
        navigation // ナビゲーション（左右の矢印）
        pagination={{
          clickable: true,
        }} // ページネーション, クリックで対象のスライドに切り替わる
        className="
        [&_.swiper-pagination]:!static
        [&_.swiper-slide]:!flex
        [&_.swiper-slide]:!justify-center
        [&_.swiper-pagination]:mx-auto
        [&_.swiper-pagination]:mt-5
        [&_.slideImage]:aspect-auto
        "
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            <Image
              className="rounded-xl object-cover h-50"
              src={image.src}
              alt="image"
              width={300}
              height={200}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
