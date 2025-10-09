import React from "react";
import HeroSection from "@/components/HeroSection";
import Banner from "@/components/Banner";
import StatsCounter from "@/components/StatsCounter";
import CompanyIntroduction from "@/components/CompanyIntroduction";
import ProductsSection from "@/components/ProductsSection";
import CaseStudies from "@/components/CaseStudies";
import NewsSection from "@/components/NewsSection";

const Home: React.FC = () => {
  return (
    <div>
      {/* 现代化Hero区域 */}
      <HeroSection />

      {/* Banner轮播区 */}
      <Banner />

      {/* 数据统计区 */}
      <StatsCounter />

      {/* 企业简介区 */}
      <CompanyIntroduction />

      {/* 产品服务区 */}
      <ProductsSection />

      {/* 客户案例区 */}
      <CaseStudies />

      {/* 新闻动态区 */}
      <NewsSection />
    </div>
  );
};

export default Home;
