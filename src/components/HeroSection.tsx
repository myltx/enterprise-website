"use client";

import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-transparent to-blue-100">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-blue-100"></div>

      {/* 浮动元素 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 标签 */}
          <div className="inline-block px-6 py-2 bg-blue-100 backdrop-blur-sm rounded-full border border-blue-200 mb-8">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              领先的数字化转型解决方案
            </span>
          </div>

          {/* 主标题 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-gradient">创新科技</span>
            <br />
            <span className="text-gray-900">引领未来</span>
          </h1>

          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            我们致力于为企业提供全方位的数字化转型解决方案，助力企业实现业务创新和可持续发展
          </p>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn btn-primary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              开始合作
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button className="btn btn-outline px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 group">
              <FaPlay className="mr-2 group-hover:scale-110 transition-transform duration-200" />
              观看演示
            </button>
          </div>

          {/* 信任指标 */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-6">信任我们的客户</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="text-2xl font-bold text-gray-400">
                  LOGO{index}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 滚动指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
