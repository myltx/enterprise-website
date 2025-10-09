"use client"

import React from 'react';
import { FaUsers, FaLightbulb, FaHeadset, FaBriefcase, FaArrowRight } from 'react-icons/fa';

const CompanyIntroduction: React.FC = () => {
  // 核心优势数据
  const coreAdvantages = [
    {
      title: '专业团队',
      description: '拥有一支经验丰富、技术精湛的专业团队，平均从业经验超过8年',
      icon: <FaUsers />
    },
    {
      title: '创新技术',
      description: '持续投入研发，掌握前沿技术，为客户提供最具竞争力的解决方案',
      icon: <FaLightbulb />
    },
    {
      title: '优质服务',
      description: '提供7×24小时全天候服务支持，确保客户业务顺利运行',
      icon: <FaHeadset />
    },
    {
      title: '行业经验',
      description: '服务超过500家企业客户，覆盖金融、制造、医疗、教育等多个行业',
      icon: <FaBriefcase />
    }
  ];

  // 公司数据
  const companyStats = [
    { value: '500+', label: '企业客户' },
    { value: '8年+', label: '行业经验' },
    { value: '98%', label: '客户满意度' },
    { value: '200+', label: '专业人才' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题和介绍 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">关于我们</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            我们是一家专注于数字化转型和企业解决方案的高新技术企业，致力于为客户提供全方位的技术支持和服务
          </p>
        </div>

        {/* 公司简介和愿景使命 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">公司简介</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              公司成立于2016年，总部位于上海，在北京、广州、深圳、成都等地设有分支机构。我们拥有一支由资深技术专家和行业顾问组成的团队，专注于为企业提供数字化转型咨询、解决方案设计与实施、技术支持与培训等全方位服务。
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              凭借卓越的技术实力和丰富的行业经验，我们已成功为金融、制造、医疗、教育、零售等多个行业的500余家企业提供了优质的解决方案和服务，帮助客户提升了业务效率，降低了运营成本，增强了市场竞争力。
            </p>
            <a href="/about" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-300">
              了解更多
              <FaArrowRight className="ml-2" />
            </a>
          </div>

          <div className="space-y-8">
            <div className="bg-primary bg-opacity-5 p-8 rounded-xl border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-primary">企业愿景</h3>
              <p className="text-gray-700 leading-relaxed">
                成为全球领先的企业数字化转型合作伙伴，通过创新技术推动商业变革，为客户创造可持续的价值。
              </p>
            </div>
            
            <div className="bg-primary bg-opacity-5 p-8 rounded-xl border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-primary">企业使命</h3>
              <p className="text-gray-700 leading-relaxed">
                以客户为中心，以技术为驱动，提供卓越的产品和服务，帮助企业实现数字化转型，提升核心竞争力，创造更大的商业价值。
              </p>
            </div>
          </div>
        </div>

        {/* 核心优势 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center text-gray-800">核心优势</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 text-primary text-2xl">
                  {advantage.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{advantage.title}</h4>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 公司数据 */}
        <div className="bg-primary py-12 rounded-2xl text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {companyStats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 合作伙伴 */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center text-gray-800">合作伙伴</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                <img
                  src={`https://picsum.photos/id/${30 + index}/200/80`}
                  alt={`合作伙伴 ${index}`}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;