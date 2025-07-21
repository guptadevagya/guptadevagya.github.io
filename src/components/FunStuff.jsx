import React, { useEffect } from 'react';
import Swiper from 'swiper';

// add these three lines to import swiper's core styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './FunStuff.module.css';
import { Navigation, Pagination } from 'swiper/modules';

function FunStuff() {
  useEffect(() => {
    new Swiper(`.${styles.card__content}`, {
      modules: [Navigation, Pagination],
      loop: true,
      spaceBetween: 32,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination', // Use global class for pagination
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next', // Use global class for navigation
        prevEl: '.swiper-button-prev',
      },
      breakpoints:{
        600: { slidesPerView: 2 },
        968: { slidesPerView: 3 },
      },
    });
  }, []);

  return (
    <section id="fun" className={styles.container}>
      <h3 className="text-center text-white my-5">Fun Stuff</h3>
      <div className={styles.card__container}>
        <div className={`${styles.card__content} swiper`}>
          <div className="swiper-wrapper">
            <article className={`${styles.card__article} swiper-slide`}>
              <div className={styles.card__image}>
                <img src="/assets/fun-stuff/activity1.jpg" alt="Activity 1" className={styles.card__img} />
                <div className={styles.card__shadow}></div>
              </div>
              <div className={styles.card__data}>
                <h3 className={styles.card__name}>Activity One</h3>
                <p className={styles.card__description}>A short description of the fun activity I do.</p>
              </div>
            </article>
            <article className={`${styles.card__article} swiper-slide`}>
              <div className={styles.card__image}>
                <img src="/assets/fun-stuff/activity2.jpg" alt="Activity 2" className={styles.card__img} />
                <div className={styles.card__shadow}></div>
              </div>
              <div className={styles.card__data}>
                <h3 className={styles.card__name}>Activity Two</h3>
                <p className={styles.card__description}>This is another fun thing that I enjoy.</p>
              </div>
            </article>
          </div>
        </div>
        
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default FunStuff;