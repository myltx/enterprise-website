"use client"

import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  category: string;
  details: string;
}

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // 初始化AOS动画
    const initializeAOS = async () => {
      if (typeof window !== 'undefined') {
        const { default: AOS } = await import('aos');
        AOS.init({
          once: true,
          duration: 1000
        });
      }
    };

    initializeAOS();

    // 初始化产品数据
    const productData: Product[] = [
      {
        id: 1,
        title: '产品1',
        description: '这是我们的核心产品之一，具有高性能、高可靠性的特点，为企业提供全面的解决方案。',
        features: [
          '高性能：采用先进技术，确保系统稳定高效运行',
          '高可靠性：多重备份机制，确保数据安全',
          '易操作：简洁直观的用户界面，降低学习成本',
          '可定制：根据客户需求进行定制开发',
          '全方位支持：提供专业的技术支持和服务'
        ],
        imageUrl: 'https://picsum.photos/id/20/800/600',
        category: 'product',
        details: '产品1是一款专为企业用户设计的综合性解决方案，集成了最新的技术和创新功能，能够满足企业在数字化转型过程中的各种需求。该产品采用模块化设计，可以根据客户的实际需求进行灵活配置，确保为客户提供最适合的解决方案。'
      },
      {
        id: 2,
        title: '产品2',
        description: '这款产品专为中小企业设计，操作简单，功能强大，帮助企业提升工作效率。',
        features: [
          '简单易用：无需专业技术知识，快速上手',
          '功能强大：涵盖企业日常运营的各个方面',
          '成本效益：高性价比，为中小企业节省成本',
          '云端部署：支持云端部署，随时随地访问',
          '数据安全：多重安全保障，确保数据安全'
        ],
        imageUrl: 'https://picsum.photos/id/21/800/600',
        category: 'product',
        details: '产品2是一款面向中小企业的高效解决方案，旨在帮助中小企业降低运营成本，提升工作效率。该产品以用户需求为中心，提供简单易用的操作界面和强大的功能，让企业用户能够快速适应并从中受益。'
      },
      {
        id: 3,
        title: '产品3',
        description: '最新推出的创新产品，采用前沿技术，为客户创造更大的价值。',
        features: [
          '技术创新：采用行业领先的前沿技术',
          '智能分析：内置智能分析功能，提供数据洞察',
          '自动化：自动化处理日常任务，提高工作效率',
          '集成性：与现有系统无缝集成，降低实施成本',
          '可扩展：灵活的架构设计，支持未来扩展'
        ],
        imageUrl: 'https://picsum.photos/id/22/800/600',
        category: 'product',
        details: '产品3是我们最新推出的创新产品，融合了人工智能、大数据分析等前沿技术，为客户提供智能化、自动化的解决方案。该产品能够帮助企业挖掘数据价值，优化业务流程，提升核心竞争力。'
      },
      {
        id: 4,
        title: '服务1',
        description: '专业的咨询服务，为企业提供定制化的解决方案，助力企业发展。',
        features: [
          '专业团队：由行业专家组成的咨询团队',
          '定制方案：根据企业实际情况制定定制化方案',
          '全程指导：提供实施过程中的全程指导支持和帮助',
          '效果评估：定期评估项目效果，确保达到预期目标',
          '持续优化：根据业务发展不断优化解决方案'
        ],
        imageUrl: 'https://picsum.photos/id/23/800/600',
        category: 'service',
        details: '服务1是我们提供的专业咨询服务，旨在帮助企业解决在数字化转型过程中遇到的各种问题。我们的咨询团队由具有丰富经验的行业专家组成，能够为企业提供全方位的咨询服务，包括战略规划、流程优化、技术选型等方面。'
      },
      {
        id: 5,
        title: '服务2',
        description: '全面的技术支持服务，确保客户系统稳定运行，解决客户后顾之忧。',
        features: [
          '7×24小时服务：全天候提供技术支持',
          '快速响应：专业团队快速响应客户需求',
          '问题解决：高效解决各种技术问题',
          '系统维护：定期系统维护，确保系统稳定运行',
          '性能优化：不断优化系统性能，提升用户体验'
        ],
        imageUrl: 'https://picsum.photos/id/24/800/600',
        category: 'service',
        details: '服务2是我们提供的全面技术支持服务，旨在确保客户系统的稳定运行，为客户解决后顾之忧。我们的技术支持团队由经验丰富的专业人员组成，能够快速响应客户需求，高效解决各种技术问题，确保客户业务的顺利进行。'
      },
      {
        id: 6,
        title: '解决方案1',
        description: '针对特定行业的综合解决方案，帮助企业解决实际问题，提升竞争力。',
        features: [
          '行业针对性：针对特定行业的特点和需求设计',
          '综合性：涵盖企业运营的各个环节',
          '先进性：采用先进技术，确保方案的先进性',
          '实用性：注重实际应用效果，解决实际问题',
          '可落地：提供详细的实施计划，确保方案顺利落地'
        ],
        imageUrl: 'https://picsum.photos/id/25/800/600',
        category: 'solution',
        details: '解决方案1是我们针对特定行业推出的综合解决方案，旨在帮助企业解决在实际运营中遇到的各种问题，提升企业的核心竞争力。该解决方案结合了我们在行业内的丰富经验和先进技术，为客户提供全方位的支持和服务。'
      }
    ];

    setProducts(productData);
    setFilteredProducts(productData);
  }, []);

  useEffect(() => {
    // 根据选择的类别过滤产品
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  return (
    <div className="bg-white">
      {/* 页面头部 */}
      <section className="relative h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/id/26/1920/400)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">产品与服务</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-white text-lg max-w-2xl mx-auto">
            探索我们的产品与服务，为您的企业提供全方位的解决方案
          </p>
        </div>
      </section>

      {/* 产品筛选 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === 'all' ? 'bg-primary text-white font-medium shadow-md' : 'bg-white text-gray-700 font-medium shadow-sm hover:shadow-md'}`}
            >
              全部
            </button>
            <button 
              onClick={() => setSelectedCategory('product')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === 'product' ? 'bg-primary text-white font-medium shadow-md' : 'bg-white text-gray-700 font-medium shadow-sm hover:shadow-md'}`}
            >
              产品
            </button>
            <button 
              onClick={() => setSelectedCategory('service')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === 'service' ? 'bg-primary text-white font-medium shadow-md' : 'bg-white text-gray-700 font-medium shadow-sm hover:shadow-md'}`}
            >
              服务
            </button>
            <button 
              onClick={() => setSelectedCategory('solution')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === 'solution' ? 'bg-primary text-white font-medium shadow-md' : 'bg-white text-gray-700 font-medium shadow-sm hover:shadow-md'}`}
            >
              解决方案
            </button>
          </div>
        </div>
      </section>

      {/* 产品列表 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                      {product.category === 'product' ? '产品' : product.category === 'service' ? '服务' : '解决方案'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{product.description}</p>
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                      <button className="text-primary font-medium hover:text-primary-dark transition-colors duration-300 flex items-center">
                        查看详情
                        <i className="fas fa-arrow-right ml-2 text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 产品特点 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">为什么选择我们的产品</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们的产品具有以下优势，帮助您的企业提升竞争力，实现业务增长
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">技术领先</h3>
              <p className="text-gray-600">
                我们采用最新的技术和创新方法，确保产品具有高性能、高可靠性和良好的用户体验。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">专业团队</h3>
              <p className="text-gray-600">
                我们拥有一支由行业专家组成的专业团队，为您提供全方位的技术支持和服务。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">持续更新</h3>
              <p className="text-gray-600">
                我们不断优化和更新产品，以适应市场变化和客户需求，确保产品始终保持竞争力。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="600">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">优质服务</h3>
              <p className="text-gray-600">
                我们提供全方位的售前、售中和售后服务，确保客户在使用过程中得到及时的支持和帮助。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 客户反馈 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">客户反馈</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              听听我们的客户怎么说，了解他们使用我们产品的真实体验和感受
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300" data-aos="fade-up">
              <div className="flex items-center mb-6">
                <img 
                  src="https://picsum.photos/id/64/100/100" 
                  alt="客户头像"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">王总</h4>
                  <p className="text-gray-500">某科技公司CEO</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "使用了这款产品后，我们公司的工作效率显著提升，团队协作更加顺畅，项目进度也得到了更好的控制。这是一款真正能够解决实际问题的好产品！"
              </p>
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-6">
                <img 
                  src="https://picsum.photos/id/65/100/100" 
                  alt="客户头像"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">李经理</h4>
                  <p className="text-gray-500">某金融企业IT总监</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "这款产品的技术实力和服务质量都非常出色，我们的系统运行稳定，数据安全得到了很好的保障。团队的专业水平和响应速度也给我们留下了深刻的印象。"
              </p>
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center mb-6">
                <img 
                  src="https://picsum.photos/id/66/100/100" 
                  alt="客户头像"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">张总监</h4>
                  <p className="text-gray-500">某制造业运营总监</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "通过实施这个解决方案，我们的生产效率提升了30%，成本降低了20%，取得了显著的经济效益。这是我们近年来最成功的一次技术升级项目。"
              </p>
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">需要更多信息？联系我们</h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            如果您对我们的产品和服务有任何疑问，或者想了解更多信息，请随时联系我们，我们的专业团队将竭诚为您服务。
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-primary font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            联系我们
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;