"use client"

import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('vision');

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
  }, []);

  // 发展历程数据
  const timelineData = [
    {
      year: '2010',
      title: '公司成立',
      description: '我们在北京市海淀区成立，开始了科技创新之旅',
      icon: 'fa-rocket'
    },
    {
      year: '2013',
      title: '产品首发布',
      description: '推出首款自主研发的核心产品，获得市场广泛认可',
      icon: 'fa-bullhorn'
    },
    {
      year: '2016',
      title: '全国扩张',
      description: '在全国主要城市设立分支机构，服务网络覆盖全国',
      icon: 'fa-expand-arrows-alt'
    },
    {
      year: '2019',
      title: '技术突破',
      description: '获得多项核心技术专利，研发实力显著提升',
      icon: 'fa-lightbulb'
    },
    {
      year: '2022',
      title: '战略转型',
      description: '成功实现数字化转型，开启企业发展新篇章',
      icon: 'fa-chart-line'
    }
  ];

  // 团队成员数据
  const teamMembers = [
    {
      id: 1,
      name: '张总',
      position: '首席执行官',
      bio: '拥有20年科技行业经验，曾任职于多家知名科技企业，带领公司实现快速发展',
      imageUrl: 'https://picsum.photos/id/1001/300/300'
    },
    {
      id: 2,
      name: '李副总',
      position: '技术总监',
      bio: '计算机博士，拥有丰富的技术研发和管理经验，负责公司技术战略规划',
      imageUrl: 'https://picsum.photos/id/1002/300/300'
    },
    {
      id: 3,
      name: '王经理',
      position: '市场总监',
      bio: '市场营销专家，擅长品牌建设和市场拓展，带领销售团队屡创佳绩',
      imageUrl: 'https://picsum.photos/id/1003/300/300'
    },
    {
      id: 4,
      name: '陈经理',
      position: '运营总监',
      bio: '运营管理专家，负责公司日常运营和流程优化，提升企业运营效率',
      imageUrl: 'https://picsum.photos/id/1004/300/300'
    },
    {
      id: 5,
      name: '赵主管',
      position: '研发主管',
      bio: '资深工程师，负责核心产品研发和技术团队管理',
      imageUrl: 'https://picsum.photos/id/1005/300/300'
    },
    {
      id: 6,
      name: '孙主管',
      position: '设计主管',
      bio: 'UI/UX设计专家，负责产品设计和用户体验优化',
      imageUrl: 'https://picsum.photos/id/1006/300/300'
    }
  ];

  return (
    <div className="bg-white">
      {/* 页面头部 */}
      <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            我们是一家专注于科技创新的企业，致力于为客户提供高质量的产品和服务，推动行业发展和社会进步。
          </p>
        </div>
      </div>

      {/* 公司简介 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">公司简介</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                科技企业成立于2010年，是一家专注于提供科技创新解决方案的企业。十余年来，我们始终坚持以客户为中心，以技术创新为动力，不断提升产品质量和服务水平。
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                目前，公司拥有一支由行业专家、技术精英组成的专业团队，在多个领域拥有核心技术和专利。我们的产品和服务覆盖全国，与众多知名企业建立了长期稳定的合作关系。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-gray-600">行业经验</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">150+</div>
                  <div className="text-gray-600">专业团队</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-gray-600">企业客户</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-gray-600">核心专利</div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary opacity-10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary opacity-10 rounded-lg"></div>
              <img
                src="https://picsum.photos/id/28/800/600"
                alt="公司办公环境"
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 使命愿景价值观 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">使命、愿景与价值观</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们的核心信念指导着企业的发展方向和员工的行为准则
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-gray-200 rounded-full">
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'vision' ? 'bg-primary text-white font-medium' : 'bg-transparent text-gray-700 font-medium'}`}
              >
                企业愿景
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'mission' ? 'bg-primary text-white font-medium' : 'bg-transparent text-gray-700 font-medium'}`}
              >
                企业使命
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'values' ? 'bg-primary text-white font-medium' : 'bg-transparent text-gray-700 font-medium'}`}
              >
                核心价值观
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {activeTab === 'vision' && (
              <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-eye text-2xl text-primary"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">成为行业领导者</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  我们致力于成为行业领先的科技创新企业，通过持续的技术创新和优质的服务，为客户创造最大价值，引领行业发展方向，成为客户信赖的合作伙伴。
                </p>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-bullseye text-2xl text-primary"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">用科技改变世界</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  我们的使命是通过科技创新，为客户提供卓越的产品和服务，帮助客户提升竞争力，推动社会进步和可持续发展，为创造更美好的世界贡献力量。
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-heart text-2xl text-primary"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">诚信、创新、合作、共赢</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">诚信</h4>
                      <p className="text-gray-600 text-sm">诚实守信，言行一致，以客户利益为重</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">创新</h4>
                      <p className="text-gray-600 text-sm">不断创新，追求卓越，勇于突破自我</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <i className="fas fa-users"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">合作</h4>
                      <p className="text-gray-600 text-sm">团队协作，开放包容，携手共创未来</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <i className="fas fa-balance-scale"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">共赢</h4>
                      <p className="text-gray-600 text-sm">互利共赢，共同发展，实现价值最大化</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">发展历程</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              回顾我们的发展历程，见证企业成长的每一个重要里程碑
            </p>
          </div>

          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* 时间线项目 */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                    <div className="text-primary font-bold mb-1">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 专业团队 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">专业团队</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们拥有一支经验丰富、技术精湛的专业团队，为客户提供最优质的服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <div className="relative">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white text-sm">{member.bio}</p>
                      <div className="flex space-x-3 mt-4">
                        <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300">
                          <i className="fab fa-weixin"></i>
                        </a>
                        <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300">
                          <i className="fas fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <button className="text-primary font-medium hover:text-primary-dark transition-colors duration-300 flex items-center">
                    查看详情
                    <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 加入我们 */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">加入我们，共创未来</h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            我们正在寻找有才华、有激情的人才加入我们的团队，一起创造更加美好的未来。
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            查看职位
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;