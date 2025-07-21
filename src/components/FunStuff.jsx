import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your custom styles
import styles from './FunStuff.module.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

function FunStuff() {
  const funActivities = [
    {
      name: 'Activity One',
      description: 'A short description of the fun activity I do.',
      images: ['/assets/fun-stuff/activity1/1.jpeg', '/assets/fun-stuff/activity1/2.jpeg', '/assets/fun-stuff/activity1/3.jpeg']
    },
    {
      name: 'Activity Two',
      description: 'This is another fun thing that I enjoy.',
      images: ['/assets/fun-stuff/activity2/1.jpeg', '/assets/fun-stuff/activity2/2.jpeg', '/assets/fun-stuff/activity2/3.jpeg']
    },
    {
      name: 'Activity Three',
      description: 'And here is a third hobby or interest.',
      images: ['/assets/fun-stuff/activity3/1.jpeg', '/assets/fun-stuff/activity3/2.jpeg', '/assets/fun-stuff/activity3/3.jpeg']
    }
  ];

  return (
    <section id="fun" className={styles.container}>
      <h3 className="text-center text-white my-5">Fun Stuff</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        spaceBetween={32}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        breakpoints={{
          600: { slidesPerView: 2 },
          968: { slidesPerView: 3 },
        }}
        className={styles.card__content}
      >
        {funActivities.map((activity) => (
          <SwiperSlide key={activity.name} className={styles.card__article}>
            <div className={styles.card__image}>
              {/* add loop={true} to this nested swiper */}
              <Swiper
                modules={[Navigation]}
                navigation
                loop={true} 
                className={styles.nested_swiper}
              >
                {activity.images.map((image, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img src={image} alt={`${activity.name} ${imgIndex + 1}`} className={styles.card__img} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={styles.card__shadow}></div>
            </div>
            <div className={styles.card__data}>
              <h3 className={styles.card__name}>{activity.name}</h3>
              <p className={styles.card__description}>{activity.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default FunStuff;