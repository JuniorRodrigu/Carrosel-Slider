/* eslint-disable @next/next/no-img-element */

import styles from '../../styles/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";



export default function Banner()  {

    return (
        <div className={styles.container}> 
        <Swiper
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        className={styles.swiper}
        modules={[Autoplay]}
        loop={true}
       
      >
        <SwiperSlide className={styles.slide} ><img src="/tmp/Animais_A31aA36.png" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.slide} ><img src="/tmp/Espaço_E01aE06.png" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.slide} ><img src="/tmp/Flores_F43_F48.png" alt="" /></SwiperSlide>
        
      </Swiper></div>


    );




}