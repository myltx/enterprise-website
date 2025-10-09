"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface BannerSlide {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Banner轮播数据
  const slides: BannerSlide[] = [
    {
      title: "打造企业数字化未来",
      description: "我们提供全方位的数字化转型解决方案，助力企业实现可持续发展",
      buttonText: "了解更多",
      buttonLink: "/about",
      imageUrl: "https://picsum.photos/id/10/1920/600",
    },
    {
      title: "创新技术驱动业务增长",
      description: "借助前沿技术，优化业务流程，提升企业核心竞争力",
      buttonText: "产品服务",
      buttonLink: "/products",
      imageUrl: "https://picsum.photos/id/11/1920/600",
    },
    {
      title: "专业团队，卓越服务",
      description: "我们拥有一支经验丰富的专业团队，为客户提供卓越的服务体验",
      buttonText: "联系我们",
      buttonLink: "/contact",
      imageUrl: "https://picsum.photos/id/12/1920/600",
    },
  ];

  // 自动轮播效果
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 下一张轮播
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

      // 等待过渡动画完成
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  // 上一张轮播
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

      // 等待过渡动画完成
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  // 切换到指定轮播
  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);

      // 等待过渡动画完成
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-gradient-to-br from-blue-50 via-transparent to-blue-100">
      {/* 现代化背景装饰 */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>

      {/* 轮播图片 */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* 轮播内容 */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}>
            <div className="max-w-4xl">
              <div className="inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
                <span className="text-blue-100 text-sm font-medium">
                  数字化转型解决方案
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={slide.buttonLink}
                  className="btn btn-primary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {slide.buttonText}
                </a>
                <a
                  href="/products"
                  className="btn btn-outline px-8 py-4 text-lg font-semibold rounded-xl glass text-white border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300">
                  查看案例
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 现代化轮播控制 */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-3 z-20">
        {/* 现代化指示器 */}
        <div className="flex space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 touch-target ${
                index === currentSlide
                  ? "bg-white w-8 shadow-lg"
                  : "bg-white/50 w-2 hover:bg-white/70"
              }`}
              aria-label={`切换到第 ${index + 1} 张轮播图`}
            />
          ))}
        </div>
      </div>

      {/* 现代化导航箭头 */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20 touch-target group"
        aria-label="上一张">
        <FaChevronLeft
          size={20}
          className="group-hover:scale-110 transition-transform duration-200"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20 touch-target group"
        aria-label="下一张">
        <FaChevronRight
          size={20}
          className="group-hover:scale-110 transition-transform duration-200"
        />
      </button>
    </section>
  );
};

export default Banner;
