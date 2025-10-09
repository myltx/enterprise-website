"use client"

import React, { useState } from 'react';
import { FaCalendarAlt, FaLongArrowAltRight, FaNewspaper } from 'react-icons/fa';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  link: string;
}

const NewsSection: React.FC = () => {
  const [hoveredNews, setHoveredNews] = useState<number | null>(null);

  // 新闻数据
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: '公司荣获2024年度最佳科技创新企业称号',
      date: '2024-05-15',
      excerpt: '在刚刚结束的2024年度科技创新大会上，我公司凭借在数字化转型领域的卓越表现，荣获最佳科技创新企业称号。',
      imageUrl: 'https://picsum.photos/id/40/800/600',
      category: '公司动态',
      link: '/news/1'
    },
    {
      id: 2,
      title: '新一代企业数字化平台V3.0版本正式发布',
      date: '2024-04-28',
      excerpt: '经过一年的研发，我公司新一代企业数字化平台V3.0版本正式发布，新增多项人工智能功能，大幅提升用户体验。',
      imageUrl: 'https://picsum.photos/id/41/800/600',
      category: '产品发布',
      link: '/news/2'
    },
    {
      id: 3,
      title: '公司与多家行业龙头企业达成战略合作',
      date: '2024-04-10',
      excerpt: '近日，我公司与多家行业龙头企业签署战略合作协议，共同推进产业数字化转型，实现互利共赢。',
      imageUrl: 'https://picsum.photos/id/42/800/600',
      category: '合作动态',
      link: '/news/3'
    }
  ];

  // 格式化日期
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">新闻动态</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            了解公司最新动态、产品发布信息和行业洞察，紧跟数字化转型的最新趋势
          </p>
        </div>

        {/* 新闻列表 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              onMouseEnter={() => setHoveredNews(item.id)}
              onMouseLeave={() => setHoveredNews(null)}
            >
              {/* 新闻图片 */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-white rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* 新闻内容 */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2" />
                  <span>{formatDate(item.date)}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-5 line-clamp-3">
                  {item.excerpt}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-300"
                >
                  阅读全文
                  <FaLongArrowAltRight className="ml-2 text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <div className="text-center mt-12">
          <a
            href="/news"
            className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            查看更多新闻
            <FaNewspaper className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;