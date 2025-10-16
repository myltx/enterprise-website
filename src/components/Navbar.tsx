"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaAngleDown, FaBuilding } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // 监听滚动事件，改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 菜单项数据
  const navItems = [
    {
      label: "首页",
      href: "/",
    },
    // {
    //   label: "关于我们",
    //   href: "/about",
    // },
    // {
    //   label: "产品服务",
    //   href: "/products",
    // },
    {
      label: "客户案例",
      href: "/",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "金融行业",
          href: "/",
        },
        {
          label: "制造行业",
          href: "/",
        },
        {
          label: "医疗行业",
          href: "/",
        },
        {
          label: "教育行业",
          href: "/",
        },
      ],
    },
    // {
    //   label: "新闻中心",
    //   href: "/",
    //   hasDropdown: true,
    //   dropdownItems: [
    //     {
    //       label: "公司新闻",
    //       href: "/",
    //     },
    //     {
    //       label: "行业动态",
    //       href: "/",
    //     },
    //     {
    //       label: "活动预告",
    //       href: "/",
    //     },
    //   ],
    // },
    // {
    //   label: "联系我们",
    //   href: "/contact",
    // },
  ];

  // 切换下拉菜单
  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  // 关闭下拉菜单（点击外部时）
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".nav-item") && !target.closest(".dropdown-menu")) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent py-3 md:py-5"
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-blue-600 flex items-center touch-target">
              {/* <span className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center mr-2 text-white">
                <FaBuilding size={18} />
              </span> */}
              {/* <img
                className="w-8 h-8 rounded-md"
                src="https://mp-d78a9abc-b098-4e6b-a411-81bf347d6358.cdn.bspapp.com/logo.png"
                alt=""
              />
              <span className="hidden sm:inline">天玑智算</span>
              <span className="sm:hidden">企业</span> */}
            </Link>
          </div>

          {/* 桌面端菜单 */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative nav-item">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`px-4 py-2 flex items-center rounded-md transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-900 hover:bg-gray-100"
                        : "text-gray-900 hover:text-blue-600"
                    }`}>
                    {item.label}
                    <FaAngleDown
                      className={`ml-1 transition-transform duration-300 ${
                        activeDropdown === item.label
                          ? "transform rotate-180"
                          : ""
                      }`}
                      size={14}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-md transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-900 hover:bg-gray-100"
                        : "text-gray-900 hover:text-blue-600"
                    }`}>
                    {item.label}
                  </Link>
                )}

                {/* 下拉菜单 */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-dark hover:bg-gray-100 transition-all duration-300">
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 右侧按钮组 */}
          <div className="hidden md:flex items-center gap-4">
            {/* <ThemeToggle />
            <Link
              href="/contact"
              className="btn btn-primary px-6 py-2 font-semibold">
              立即联系
            </Link> */}
          </div>

          {/* 移动端菜单按钮 */}
          {/* <button
            className="md:hidden text-dark touch-target p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="菜单"
            aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button> */}
        </div>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-md mt-2 py-2 max-h-[80vh] overflow-y-auto">
            <nav role="navigation" aria-label="主导航">
              {navItems.map((item) => (
                <div key={item.label} className="px-4 py-1">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex justify-between items-center w-full px-4 py-3 rounded-md text-dark hover:bg-gray-100 transition-all duration-300 touch-target"
                        aria-expanded={activeDropdown === item.label}
                        aria-controls={`mobile-dropdown-${item.label}`}>
                        {item.label}
                        <FaAngleDown
                          className={`transition-transform duration-300 ${
                            activeDropdown === item.label
                              ? "transform rotate-180"
                              : ""
                          }`}
                          size={14}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div
                          id={`mobile-dropdown-${item.label}`}
                          className="mt-1 ml-4 border-l-2 border-gray-200">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-dark hover:bg-gray-100 transition-all duration-300 touch-target"
                              onClick={() => setIsMobileMenuOpen(false)}>
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 rounded-md text-dark hover:bg-gray-100 transition-all duration-300 touch-target"
                      onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="px-4 py-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
              <Link
                href="/contact"
                className="btn btn-primary w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}>
                立即联系
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
