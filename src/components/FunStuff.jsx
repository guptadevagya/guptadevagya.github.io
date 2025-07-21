import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './FunStuff.module.css'; // We will create this file next

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

function FunStuff() {
  useEffect(() => {
    // Initialize Swiper when the component mounts
    new Swiper(`.${styles.card__content}`, {
      modules: [Navigation, Pagination],
      loop: true,
      spaceBetween: 32,
      grabCursor: true,
      pagination: {
        el: `.${styles['swiper-pagination']}`,
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: `.${styles['swiper-button-next']}`,
        prevEl: `.${styles['swiper-button-prev']}`,
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
            {/* Slide 1 */}
            <article className={`${styles.card__article} swiper-slide`}>
              <div className={styles.card__image}>
                <img src="/assets/fun-stuff/activity1.jpg" alt="Activity 1" className={styles.card__img} />
                <div className={styles.card__shadow}></div>
              </div>
              <div className={styles.card__data}>
                <h3 className={styles.card__name}>Activity One</h3>
                <p className={styles.card__description}>A short description of the fun activity I do.</p>
                <a href="#" className={styles.card__button}>View More</a>
              </div>
            </article>
            {/* Add more articles here for more slides */}
          </div>
        </div>
        
        {/* Navigation & Pagination */}
        <div className={`${styles['swiper-button-next']} swiper-button-next`}></div>
        <div className={`${styles['swiper-button-prev']} swiper-button-prev`}></div>
        <div className={`${styles['swiper-pagination']} swiper-pagination`}></div>
      </div>
    </section>
  );
}

export default FunStuff;