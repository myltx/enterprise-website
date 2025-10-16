import React from "react";
// import Link from "next/link";
// import {
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaClock,
//   FaWeixin,
//   FaWeibo,
//   FaLinkedin,
// } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer pt-8 sm:pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* 关于我们 */}
          {/* <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white text-lg font-medium mb-4">关于我们</h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
              ”天玑智算“是一家专注于提供高质量产品和服务的科技企业，致力于为客户创造价值，推动发展。深耕量化系统领域，以“天玑“喻精准、高效与智慧，为专业机构及投资者提供可靠量化解决方案，技术赋能市场决策与执行
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target"
                aria-label="微信">
                <FaWeixin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target"
                aria-label="微博">
                <FaWeibo size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target"
                aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div> */}

          {/* 快速链接 */}
          {/* <div>
            <h4 className="text-white text-lg font-medium mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target text-sm sm:text-base">
                  首页
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target text-sm sm:text-base">
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target text-sm sm:text-base">
                  产品服务
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target text-sm sm:text-base">
                  新闻动态
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target text-sm sm:text-base">
                  联系我们
                </Link>
              </li>
            </ul>
          </div> */}

          {/* 产品服务 */}
          {/* <div>
            <h4 className="text-white text-lg font-medium mb-4">产品服务</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target text-sm sm:text-base">
                  网站建设中...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target text-sm sm:text-base">
                  产品2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target text-sm sm:text-base">
                  产品3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target text-sm sm:text-base">
                  服务1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 touch-target text-sm sm:text-base">
                  服务2
                </a>
              </li>
            </ul>
          </div> */}

          {/* 联系我们 */}
          {/* <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white text-lg font-medium mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt
                  className="text-gray-400 mt-1 mr-3 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-400 text-sm sm:text-base">
                  浙江省杭州市西湖区蒋村街道西溪银泰商业中心3号楼南楼1009室
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone
                  className="text-gray-400 mr-3 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-400 text-sm sm:text-base">
                  400-123-4567
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope
                  className="text-gray-400 mr-3 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-400 text-sm sm:text-base break-all">
                  tianji@tianjizhisuan.com
                </span>
              </li>
              <li className="flex items-center">
                <FaClock
                  className="text-gray-400 mr-3 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-400 text-sm sm:text-base">
                  周一至周五 9:00-18:00
                </span>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 天玑智算. 保留所有权利. |{" "}
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-all duration-300">
                浙ICP备2025203798号-1
              </a>
            </p>
            {/* <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 text-xs sm:text-sm transition-all duration-300 touch-target">
                隐私政策
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 text-xs sm:text-sm transition-all duration-300 touch-target">
                使用条款
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 text-xs sm:text-sm transition-all duration-300 touch-target">
                网站地图
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
