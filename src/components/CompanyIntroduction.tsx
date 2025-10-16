"use client";

import React from "react";

const CompanyIntroduction: React.FC = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center overflow-hidden">
      {/* 移动端简洁版 */}
      <div className="md:hidden container mx-auto px-4 max-w-2xl">
        <div className="text-center">
          {/* 公司 Logo 和名称 */}
          <div className="mb-8">
            <div className="inline-flex flex-col items-center">
              <img
                className="w-24 h-24 mb-4"
                src="https://mp-d78a9abc-b098-4e6b-a411-81bf347d6358.cdn.bspapp.com/logo.png"
                alt="天玑智算"
              />
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                天玑智算
              </h1>
            </div>
          </div>

          {/* 网站建设中提示 */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center justify-center gap-3">
              <svg
                className="w-6 h-6 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg font-medium">
                网站正在建设中，敬请期待
              </span>
            </div>
          </div>

          {/* 备案信息 */}
          <div className="text-gray-600 text-sm mb-6">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-all duration-300 text-gray-600 text-base text-gray-500">
              浙ICP备2025203798号-1
            </a>
          </div>

          {/* 联系信息 - 小字体 */}
          <div className="text-gray-500 text-xs space-y-1">
            <p>
              地址：浙江省杭州市西湖区蒋村街道西溪银泰商业中心3号楼南楼1009室
            </p>
            <p>
              邮箱：
              <a
                href="mailto:tianji@tianjizhisuan.com"
                className="text-blue-500 hover:text-blue-700 transition-colors">
                tianji@tianjizhisuan.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Web 端丰富版 */}
      <div className="hidden md:block container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* 主要内容卡片 */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 relative overflow-hidden">
            {/* 装饰性背景 */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-48 -mt-48 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-100 to-transparent rounded-full -ml-36 -mb-36 opacity-30"></div>

            <div className="relative z-10">
              {/* 图标 */}
              <div className="mb-8">
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto shadow-xl transform hover:scale-110 transition-transform duration-300">
                  <img
                    className="w-16 h-16"
                    src="https://mp-d78a9abc-b098-4e6b-a411-81bf347d6358.cdn.bspapp.com/logo.png"
                    alt="天玑智算"
                  />
                </div>
              </div>

              {/* 标题 */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 text-center">
                天玑智算
              </h1>

              {/* 描述 */}
              <p className="text-2xl text-gray-600 mb-10 text-center font-medium">
                网站正在建设中，敬请期待
              </p>

              {/* 分隔线 */}
              <div className="flex items-center justify-center mb-10">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full mx-3"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
              </div>

              {/* 附加信息 */}
              <p className="text-lg text-gray-600 mb-10 text-center leading-relaxed">
                我们正在努力完善页面内容，为您带来更好的体验
              </p>

              {/* 功能卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">快速响应</h3>
                  <p className="text-sm text-gray-600">即将推出全新体验</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">优质内容</h3>
                  <p className="text-sm text-gray-600">精心设计每个细节</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">持续更新</h3>
                  <p className="text-sm text-gray-600">不断优化和改进</p>
                </div>
              </div>

              {/* 进度指示 */}
              <div className="mb-10">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>建设进度</span>
                  <span className="font-bold text-blue-600">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-700 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "60%" }}></div>
                </div>
              </div>

              {/* 备案和联系信息 */}
              <div className="text-center space-y-2">
                {/* <p className="text-gray-600 text-sm">浙ICP备2024123456号</p> */}
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-all duration-300 text-gray-600">
                  浙ICP备2025203798号-1
                </a>
                <div className="text-gray-500 text-xs space-y-1 mt-5">
                  <p>
                    地址：浙江省杭州市西湖区蒋村街道西溪银泰商业中心3号楼南楼1009室
                  </p>
                  <p>
                    邮箱：
                    <a
                      href="mailto:tianji@tianjizhisuan.com"
                      className="text-blue-500 hover:text-blue-700 transition-colors">
                      tianji@tianjizhisuan.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;
