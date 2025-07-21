import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './FunStuff.module.css';
import { Navigation, Pagination } from 'swiper/modules';

function FunStuff() {
  useEffect(() => {
    // Initialize the main slider without assigning it to a variable
    new Swiper(`.${styles.card__content}`, {
      modules: [Navigation, Pagination],
      loop: true,
      spaceBetween: 32,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination-main',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next-main',
        prevEl: '.swiper-button-prev-main',
      },
      breakpoints:{
        600: { slidesPerView: 2 },
        968: { slidesPerView: 3 },
      },
    });

    // Initialize nested sliders for each card
    document.querySelectorAll(`.${styles.gallery_top}`).forEach((gallery) => {
      new Swiper(gallery, {
        modules: [Navigation],
        navigation: {
          nextEl: '.swiper-button-next-nested',
          prevEl: '.swiper-button-prev-nested',
        },
      });
    });
  }, []);

  return (
    <section id="fun" className={styles.container}>
      <h3 className="text-center text-white my-5">Fun Stuff</h3>
      <div className={styles.card__container}>
        <div className={`${styles.card__content} swiper`}>
          <div className="swiper-wrapper">
            {/* Card 1 */}
            <article className={`${styles.card__article} swiper-slide`}>
              <div className={`${styles.gallery_top} swiper`}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="/assets/fun-stuff/activity1.jpg" alt="Activity 1" className={styles.card__img} />
                  </div>
                  <div className="swiper-slide">
                    <img src="/assets/fun-stuff/activity1-2.jpg" alt="Activity 1" className={styles.card__img} />
                  </div>
                </div>
                <div className="swiper-button-next-nested"></div>
                <div className="swiper-button-prev-nested"></div>
              </div>
              <div className={styles.card__data}>
                <h3 className={styles.card__name}>Activity One</h3>
                <p className={styles.card__description}>A short description of the fun activity I do.</p>
              </div>
            </article>
            {/* Card 2 */}
            <article className={`${styles.card__article} swiper-slide`}>
              <div className={`${styles.gallery_top} swiper`}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="/assets/fun-stuff/activity2.jpg" alt="Activity 2" className={styles.card__img} />
                  </div>
                  <div className="swiper-slide">
                    <img src="/assets/fun-stuff/activity2-2.jpg" alt="Activity 2" className={styles.card__img} />
                  </div>
                </div>
                <div className="swiper-button-next-nested"></div>
                <div className="swiper-button-prev-nested"></div>
              </div>
              <div className={styles.card__data}>
                <h3 className={styles.card__name}>Activity Two</h3>
                <p className={styles.card__description}>This is another fun thing that I enjoy.</p>
              </div>
            </article>
          </div>
        </div>
        
        <div className="swiper-button-next-main"></div>
        <div className="swiper-button-prev-main"></div>
        <div className="swiper-pagination-main"></div>
      </div>
    </section>
  );
}

export default FunStuff;