import React from 'react'
import './Slider.scss'
import '../Global.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


const Slider = () => {
  return (
   <>
      <div className="container">

    <Swiper className="SwipContainer"
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      scrollbar={{draggable: true}}
      >

      <SwiperSlide className="SwipSingle">
            <img src="https://images.uzum.uz/cfv22hfhj8j9g698o2c0/main_page_banner.jpg" alt="" />
      </SwiperSlide>

      <SwiperSlide className="SwipSingle">
            <img src="https://images.uzum.uz/cg4o7hfg49devoaa3j60/main_page_banner.jpg" alt="" />      </SwiperSlide>

      <SwiperSlide className="SwipSingle">
             <img src="https://images.uzum.uz/cg7c92vg49devoaaf0p0/main_page_banner.jpg" alt="" />
      </SwiperSlide>

      <SwiperSlide className="SwipSingle">
            <img src="https://images.uzum.uz/cg0921nhgiov1qidepjg/main_page_banner.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
      </div>
   </>
  )
}

export default Slider

