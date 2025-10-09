"use client"

import React, { useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaLongArrowAltRight } from 'react-icons/fa';

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  clientName: string;
  clientIndustry: string;
  projectDate: string;
  projectResults: string[];
}

const CaseStudies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  // 案例数据
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: '金融科技平台数字化转型',
      category: '金融',
      description: '为某大型金融机构构建的数字化服务平台，提升了用户体验和运营效率',
      imageUrl: 'https://picsum.photos/id/20/800/600',
      clientName: '国金证券',
      clientIndustry: '金融服务',
      projectDate: '2023年3月',
      projectResults: ['用户满意度提升45%', '交易处理效率提升60%', '运营成本降低30%']
    },
    {
      id: 2,
      title: '智能制造解决方案实施',
      category: '制造',
      description: '为制造企业打造的智能工厂解决方案，实现生产流程自动化和数字化管理',
      imageUrl: 'https://picsum.photos/id/21/800/600',
      clientName: '远大重工',
      clientIndustry: '重型机械制造',
      projectDate: '2023年5月',
      projectResults: ['生产效率提升55%', '产品质量合格率提升至99.5%', '能耗降低25%']
    },
    {
      id: 3,
      title: '零售企业全渠道营销系统',
      category: '零售',
      description: '为连锁零售企业构建的线上线下一体化营销系统，实现全渠道用户运营',
      imageUrl: 'https://picsum.photos/id/22/800/600',
      clientName: '优品百货',
      clientIndustry: '零售',
      projectDate: '2023年7月',
      projectResults: ['销售额增长35%', '会员活跃度提升65%', '营销转化率提升25%']
    },
    {
      id: 4,
      title: '医疗健康数据平台建设',
      category: '医疗',
      description: '为医疗机构构建的健康数据管理平台，提升医疗服务质量和患者体验',
      imageUrl: 'https://picsum.photos/id/23/800/600',
      clientName: '康泰医院',
      clientIndustry: '医疗健康',
      projectDate: '2023年9月',
      projectResults: ['患者等待时间减少50%', '医疗记录准确率100%', '服务投诉率下降40%']
    },
    {
      id: 5,
      title: '教育资源数字化平台',
      category: '教育',
      description: '为教育机构开发的在线教育平台，提供丰富的数字化学习资源和互动教学功能',
      imageUrl: 'https://picsum.photos/id/24/800/600',
      clientName: '明德教育',
      clientIndustry: '教育培训',
      projectDate: '2023年11月',
      projectResults: ['在线学员增长120%', '课程完成率提升45%', '教学效果评分提升30%']
    },
    {
      id: 6,
      title: '物流配送智能调度系统',
      category: '物流',
      description: '为物流企业开发的智能调度系统，优化配送路线和资源配置',
      imageUrl: 'https://picsum.photos/id/25/800/600',
      clientName: '速达物流',
      clientIndustry: '物流运输',
      projectDate: '2024年1月',
      projectResults: ['配送效率提升50%', '燃油成本降低28%', '准时送达率提升至98%']
    }
  ];

  // 获取所有分类
  const categories = ['全部', ...Array.from(new Set(caseStudies.map(study => study.category)))];

  // 筛选案例
  const filteredCaseStudies = activeCategory === '全部' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">成功案例</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们与各行各业的客户合作，提供创新的解决方案，帮助他们实现业务目标和数字化转型
          </p>
        </div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category ? 'bg-primary text-white font-medium shadow-md' : 'bg-white text-gray-700 font-medium hover:bg-gray-100'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 案例列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              onMouseEnter={() => setHoveredCase(caseStudy.id)}
              onMouseLeave={() => setHoveredCase(null)}
            >
              {/* 案例图片 */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={caseStudy.imageUrl}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-white rounded-full mb-2">
                    {caseStudy.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{caseStudy.title}</h3>
                </div>
              </div>

              {/* 案例内容 */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {caseStudy.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <h4 className="font-medium text-gray-800">{caseStudy.clientName}</h4>
                    <p className="text-sm text-gray-500">{caseStudy.clientIndustry} · {caseStudy.projectDate}</p>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-5 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-all duration-300"
                  >
                    查看详情
                    <FaArrowRight className="ml-2 text-sm" />
                  </a>
                </div>
              </div>

              {/* 悬停时显示的详细结果 */}
              <div className={`absolute inset-0 bg-white p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none`}>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">项目成果:</h4>
                    <ul className="space-y-2">
                      {caseStudy.projectResults.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center px-5 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  联系我们
                  <FaArrowRight className="ml-2 text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-all duration-300"
          >
            了解更多案例
            <FaLongArrowAltRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;