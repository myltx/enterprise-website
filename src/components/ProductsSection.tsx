"use client";

import React, { useState } from "react";
import { FaArrowRight, FaTimes, FaCheck } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  imageUrl: string;
  link: string;
}

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("全部");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // 产品数据
  const products: Product[] = [
    {
      id: 1,
      name: "企业数字化转型咨询服务",
      category: "咨询服务",
      description:
        "为企业提供全面的数字化转型战略规划、流程优化和技术实施咨询服务，帮助企业实现业务模式创新和运营效率提升。",
      features: [
        "战略规划与路线图制定",
        "业务流程优化",
        "技术架构设计",
        "变革管理支持",
      ],
      imageUrl: "https://picsum.photos/id/50/800/600",
      link: "/products/1",
    },
    {
      id: 2,
      name: "智能数据分析平台",
      category: "软件产品",
      description:
        "基于人工智能和大数据技术的智能分析平台，帮助企业快速挖掘数据价值，提升决策效率和准确性。",
      features: ["多源数据集成", "智能算法分析", "可视化报表", "预测性分析"],
      imageUrl: "https://picsum.photos/id/51/800/600",
      link: "/products/2",
    },
    {
      id: 3,
      name: "企业资源规划(ERP)系统",
      category: "软件产品",
      description:
        "全面的企业资源规划解决方案，整合企业内部各类资源和业务流程，实现信息共享和协同工作。",
      features: [
        "财务与会计管理",
        "供应链管理",
        "人力资源管理",
        "客户关系管理",
      ],
      imageUrl: "https://picsum.photos/id/52/800/600",
      link: "/products/3",
    },
    {
      id: 4,
      name: "智能制造解决方案",
      category: "解决方案",
      description:
        "为制造企业提供的智能制造整体解决方案，实现生产过程数字化、自动化和智能化。",
      features: [
        "智能工厂设计",
        "生产过程监控",
        "设备预测性维护",
        "质量控制与追溯",
      ],
      imageUrl: "https://picsum.photos/id/53/800/600",
      link: "/products/4",
    },
    {
      id: 5,
      name: "云计算与基础设施服务",
      category: "基础设施",
      description:
        "提供安全、稳定、高效的云计算和IT基础设施服务，包括IaaS、PaaS和SaaS等多种服务模式。",
      features: [
        "弹性计算资源",
        "数据存储与备份",
        "网络安全防护",
        "7×24小时技术支持",
      ],
      imageUrl: "https://picsum.photos/id/54/800/600",
      link: "/products/5",
    },
    {
      id: 6,
      name: "数字化营销解决方案",
      category: "解决方案",
      description:
        "为企业提供全方位的数字化营销工具和服务，帮助企业精准触达目标客户，提升品牌影响力和销售业绩。",
      features: ["全渠道营销", "客户画像分析", "营销自动化", "效果监测与优化"],
      imageUrl: "https://picsum.photos/id/55/800/600",
      link: "/products/6",
    },
  ];

  // 获取所有分类
  const categories = [
    "全部",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  // 筛选产品
  const filteredProducts =
    activeCategory === "全部"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // 打开产品详情模态框
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden"; // 防止背景滚动
  };

  // 关闭产品详情模态框
  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto"; // 恢复背景滚动
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        {/* 现代化标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              产品与服务
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            创新解决方案
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我们提供全方位的数字化转型产品和服务，满足不同行业、不同规模企业的多样化需求
          </p>
        </div>

        {/* 现代化分类筛选 */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-blue-300 hover:shadow-md"
              }`}>
              {category}
            </button>
          ))}
        </div>

        {/* 现代化产品列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card group cursor-pointer hover:scale-105 transition-all duration-500"
              onClick={() => openProductModal(product)}>
              {/* 现代化产品图片 */}
              <div className="relative overflow-hidden h-56 lg:h-64">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 w-full">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {product.name}
                      </h3>
                      <p className="text-white/90 mb-4 line-clamp-2 text-sm leading-relaxed">
                        {product.description}
                      </p>
                      <button className="btn btn-secondary text-sm px-4 py-2">
                        查看详情
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* 现代化产品信息 */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    {product.category}
                  </div>
                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 touch-target text-sm group">
                    了解更多
                    <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 产品详情模态框 */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center hover:bg-opacity-100 transition-opacity duration-300 touch-target"
                  onClick={closeProductModal}
                  aria-label="关闭详情">
                  <FaTimes className="text-gray-800" />
                </button>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                    {selectedProduct.name}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                    {selectedProduct.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
                    核心功能
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {selectedProduct.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 sm:mr-4 flex-shrink-0">
                          <FaCheck className="text-sm sm:text-base" />
                        </div>
                        <span className="text-gray-700 text-sm sm:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={selectedProduct.link}
                    className="px-6 sm:px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex-shrink-0 text-center touch-target">
                    立即咨询
                  </a>
                  <button
                    className="px-6 sm:px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-all duration-300 flex-shrink-0 touch-target"
                    onClick={closeProductModal}>
                    关闭
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 咨询按钮 */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="/contact"
            className="inline-flex items-center px-6 sm:px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg touch-target">
            联系我们获取定制方案
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
