import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsCarousel = () => {
    useEffect(() => {
        const testimonialData = [
            {
                avatar:"https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693648146787x511804926398789000%2Fdeepkal%2520Vasvani.jpg?w=128&h=128&auto=compress&dpr=1.25&fit=max",
                name: "Deepkal Vaswani,USA",
                review:
                  "Microsoft Conversational AI Cloud Architecture (8 years exp.)",
              },
              {
                avatar:"https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693648064852x259655426939135360%2FRaj%25202.jpg?w=128&h=128&auto=compress&dpr=1.25&fit=max",
                name: "Raj Krishna,USA",
                review:
                  "Microsoft AI-ML, DevOps,Data Analytics  (10 years exp.)",
              },
              {
                avatar:"https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693648218647x448390029629642800%2FRaj.jpg?w=128&h=128&auto=compress&dpr=1.25&fit=max",
                name: "Raj Paul,USA",
                review:
                  "Microsoft Conversational AI,Generative AI (8 years exp.)",
              },
              {
                avatar:"https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693648263759x121358319192990110%2Fdiana.jpg?w=128&h=128&auto=compress&dpr=1.25&fit=max",
                name: "Diana,Ireland",
                review:
                  "AI Expert, 4 Years Experience at Microsoft.",
              },
            ];

        const slideHolder = document.querySelector("#slideHolder");

        testimonialData.forEach(item => {
            slideHolder.innerHTML += `
                <div class="swiper-slide">
                    <div class="ImgHolder">
                        <img src="${item.avatar}" alt="${item.name}">
                    </div>
                    <div class="ContentHolder">
                        <h3>${item.name}</h3>
                        <p>${item.review}</p>
                    </div>
                </div>
            `;
        });

        const swiper = new Swiper('#craouselContainer', {
            grabCursor: true,
            centeredSlides: true,
            slidesPerView:2.3,
            loop: true,
            spaceBetween: 20,
            effect: "coverflow",
            coverflowEffect: {
                rotate: 0,
                depth: 800,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: { delay: 100 }
        });

        const queryResizer = () => {
            if (window.innerWidth < 724) swiper.params.slidesPerView = 2;
            if (window.innerWidth > 501) swiper.params.slidesPerView = 2;
            if (window.innerWidth > 724) swiper.params.slidesPerView = 2;
            if (window.innerWidth < 501) swiper.params.slidesPerView = 2;
            swiper.update();
        };

        window.addEventListener('resize', queryResizer);
        queryResizer();

        return () => {
            window.removeEventListener('resize', queryResizer);
        };
    }, []);

    return (
        <>
        <div className="test-container">
        <div id="craouselContainer" className="swiper-container">
            <div className="swiper-wrapper" id="slideHolder"></div>
            <div className="swiper-pagination"></div>
        </div>
        </div>
        </>
    );
};

export default TestimonialsCarousel;

