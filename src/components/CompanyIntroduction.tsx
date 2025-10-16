import React from "react";

const CompanyIntroduction: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 pb-16 flex ">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 主标题区 */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 flex items-center">
              <img
                className="w-16 h-16"
                src="https://mp-d78a9abc-b098-4e6b-a411-81bf347d6358.cdn.bspapp.com/logo.png"
                alt=""
              />
              天玑智算
            </h1>
            <div className="h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
          </div>
        </div>

        {/* 公司简介卡片 */}
        <div className="mb-12">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
            {/* 装饰性背景元素 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-32 -mt-32 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100 to-transparent rounded-full -ml-24 -mb-24 opacity-40"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mx-4">
                  公司简介
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                ”天玑智算“是一家专注于提供高质量产品和服务的科技企业，致力于为客户创造价值，推动发展。深耕量化系统领域，以”天玑“喻精准、高效与智慧，为专业机构及投资者提供可靠量化解决方案，技术赋能市场决策与执行
              </p>
            </div>
          </div>
        </div>

        {/* 联系信息卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 公司地址 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  公司地址
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  浙江省杭州市西湖区蒋村街道西溪银泰商业中心3号楼南楼1009室
                </p>
              </div>
            </div>
          </div>

          {/* 联系方式 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  联系方式
                </h3>
                <a
                  href="mailto:tianji@tianjizhisuan.com"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium break-all">
                  tianji@tianjizhisuan.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;
