"use client";
import "../public/css/landing.css";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import CustomFooter from "@/components/CustomFooter";

const slides4 = [
  {
    image: "/img/user1.png",
    description:
      "“Saya sangat membutuhkan beberapa fitur dari aplikasi ini, terutama saya sangat menyukai fitur Summarize. Sangat membantu sekali!”",
  },

  { image: "/img/user1.png", description: "“Sangat keren, tidak ada yang perlu dikomentari lagi!”" },

  { image: "/img/user1.png", description: "“Saya tidak sabar menunggu peluncuran aplikasinya!”" },

  { image: "/img/user1.png", description: "“Fitur Structure Validation sangat membantu dalam mengecek dokumen saya sebelum disampaikan kepada klien. Terima kasih DOCXTRA!”" },

  { image: "/img/user1.png", description: "“Saya senang dengan fitur Ask Question, sangat mudah untuk memahami isi dokumen yang rumit.”" },

  { image: "/img/user1.png", description: "“Fitur Similarity Document membantu saya dalam memastikan keaslian dokumen saya sebelum mempublikasikannya.”" }
];


const slides3 = [
  {
    title: 'Summaroid',
    description: 'Simplify lengthy documents into concise summaries tailored to your needs, effortlessly extracting key information and saving you time',
    image: 'img/paper 3.png'
  },
  {
    title: 'Syntax Guard',
    description: 'Ensure the integrity and correctness of document structures to meet standards, effortlessly validating compliance and consistency.',
    image: 'img/process (1).png'
  },
  {
    title: 'Doc Query',
    description: 'Inquire about document contents freely, gaining deeper insights and understanding through personalized questions.',
    image: 'img/faq 1.png'
  },
  {
    title: 'Similatron',
    description: 'Detect potential plagiarism across your documents with comprehensive similarity checks, efficiently identifying similarities and ensuring originality.',
    image: 'img/transparency 1.png'
  }
];

export default function Page() {
  const [slidesPerViewSection3, setSlidesPerViewSection3] = useState(2);
  const [slidesPerViewSection4, setSlidesPerViewSection4] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerViewSection3(1);
        setSlidesPerViewSection4(1);
      } else {
        setSlidesPerViewSection3(2);
        setSlidesPerViewSection4(3);
      }
    };

    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return (
    <>
    <main>
      <section id="section1" className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-24 md:flex md:items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Unlock the Power of Your Documents with DOCXTRA
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg mb-6">
              DOCXTRA helps you gain insights from your documents
            </p>
            <div className="md:flex justify-start">
              <a
                href="/auth"
                className="btn-try-now items-center text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Try Now
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="dark:hidden max-w-full m-auto md:max-w-xl"
              src={"/img/Group 115.png"}
              alt="docxtra maskot"
              style={{ maxHeight: "90rem" }}
            />
            <img
              className="hidden dark:block max-w-full m-auto md:max-w-xl"
              src={"/img/Group 115.png"}
              alt="docxtra maskot"
              style={{ maxHeight: "90rem" }}
            />
          </div>
        </div>
      </section>

      <section id="section2" className="dark:bg-gray-900 bg-center p-14 bg-cover bg-[url('/img/Section2.png')]">
        <div className="container mx-auto px-6 py-24 md:flex md:items-center">
          <div className="relative w-full md:w-1/3 lg:w-3/5 z-20">
            <img
              src={"img/Mascot_Section2.png"}
              alt="image"
              className="max-w-full m-auto md:max-w-2xl"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="flex-row text-5xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6 mt-500">
              ABOUT <span>DOCXTRA</span>
            </h2>
            <p className="text-sm text-gray-400 sm:text-base dark:text-white">
              The artificial intelligence-based document processing application
              DOCXTRA can help you summarize and explain fill out documents
              quickly and accurately. With DOCXTRA, users can summarize document
              contents, validate document structure, ask questions about
              document contents, and check the plagiarism level of documents.
            </p>
          </div>
        </div>
      </section>

      <div id="section3" className="h-fit md:min-h-screen h-100 bg-cover bg-center  bg-[url('/img/Section3.png')]">
        <div className="max-w-screen p-8 sm:p-14">
          <h2 className="text-white text-5xl font-bold font-nunito text-center mt-8 mb-8">
            Our <span className="text-purple-300">Features</span>
          </h2>

          <div className="swiper-container content">
            <Swiper
              spaceBetween={30}
              slidesPerView={slidesPerViewSection3}
              loop={false}
              navigation={{
                nextEl: '#right',
                prevEl: '#left',
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                type: "bullets",
                dynamicBullets: true,
              }}
              modules={[Pagination, Navigation]}
            >
              <div className="swiper-wrapper relative">
                {slides3.map((slide, index) => (
                  <SwiperSlide key={index} className="wrapper">
                    <div className="card opacity-90 flex flex-col items-left justify-between w-full h-80 border-5 bg-[#5B5470] border border-white rounded-lg p-5 hover:cursor-grab active:cursor-grabbing relative">
                      <h2 className="text-white font-bold font-nunito text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
                        {slide.title}
                      </h2>
                      <span className="text-white font-lato text-sm lg:text-lg xl:text-2xl">
                        {slide.description}
                      </span>
                      <div className="icon flex items-end justify-end">
                        <img
                          src={slide.image}
                          alt="Icon"
                          draggable="false"
                          className="w-full max-w-full object-cover"
                          style={{ maxWidth: '8rem' }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
              <div className="mt-14 flex justify-center">
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      <div id="section4" className="min-h-fit md:min-h-screen bg-cover bg-center  bg-[url('/img/Section4.png')]">
        <div className="max-w-screen p-8 sm:p-14">
          <h2 className="text-white text-5xl font-bold font-nunito text-shadow-md text-center mt-8 mb-8">
            User <span className="text-purple-300">Review</span>
          </h2>

          <div className="swiper-container content">
            <Swiper
              spaceBetween={30}
              slidesPerView={slidesPerViewSection4}
              loop={false}
              navigation={{
                nextEl: '#right',
                prevEl: '#left',
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                type: "bullets",
                dynamicBullets: true,
              }}
              modules={[Pagination]}
            >
              <div className="swiper-wrapper relative">
                {slides4.map((slide, index) => (
                  <SwiperSlide key={index} className="wrapper">
                    <div className="w-80 h-80 mx-auto relative">
                      <div className="rounded-lg shadow-lg p-4 md:p-10 w-full h-full bg-[#312C3F] absolute top-3 left-3"></div>
                      <div className="swiper-card rounded-lg overflow-hidden hover:cursor-grab active:cursor-grabbing shadow-lg p-4 md:p-10 w-full h-full bg-[#352F44] absolute left-0 bottom-3 flex flex-col items-center justify-center">
                        <img
                          src={slide.image}
                          alt={slide.description}
                          className="w-1/3 md:w-20 h-auto object-cover mb-4"
                        />
                        <p className="text-gray-800 font-lato dark:text-white text-base md:text-lg text-center">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
              <div className="mt-14 flex justify-center">
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </main>
    <CustomFooter />
    </>
  );
}
