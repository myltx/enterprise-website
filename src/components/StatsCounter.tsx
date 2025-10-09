"use client";

import React, { useState, useEffect } from "react";
import { FaBuilding, FaCheckCircle, FaUsers, FaSmile } from "react-icons/fa";

interface CounterItem {
  id: number;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon: React.ReactNode;
}

const StatsCounter: React.FC = () => {
  const [counting, setCounting] = useState(false);
  const [counters, setCounters] = useState<CounterItem[]>([
    {
      id: 1,
      value: 0,
      label: "企业客户",
      suffix: "+",
      icon: <FaBuilding />,
    },
    {
      id: 2,
      value: 0,
      label: "成功案例",
      suffix: "+",
      icon: <FaCheckCircle />,
    },
    {
      id: 3,
      value: 0,
      label: "专业团队",
      suffix: "人",
      icon: <FaUsers />,
    },
    {
      id: 4,
      value: 0,
      label: "满意度",
      prefix: "9",
      suffix: "%",
      icon: <FaSmile />,
    },
  ]);

  // 最终数据
  const finalCounters: CounterItem[] = [
    {
      id: 1,
      value: 500,
      label: "企业客户",
      suffix: "+",
      icon: <FaBuilding />,
    },
    {
      id: 2,
      value: 800,
      label: "成功案例",
      suffix: "+",
      icon: <FaCheckCircle />,
    },
    {
      id: 3,
      value: 150,
      label: "专业团队",
      suffix: "人",
      icon: <FaUsers />,
    },
    {
      id: 4,
      value: 8,
      label: "满意度",
      prefix: "9",
      suffix: "%",
      icon: <FaSmile />,
    },
  ];

  // 当组件可见时开始计数动画
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counting) {
          setCounting(true);
          startCounting();
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const targetElement = document.getElementById("stats-counter");

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [counting]);

  // 计数动画函数
  const startCounting = () => {
    const duration = 2000; // 动画持续时间（毫秒）
    const steps = 60; // 动画步数
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      // 更新计数器数值
      setCounters((prevCounters) => {
        return prevCounters.map((counter) => {
          const finalCounter = finalCounters.find((fc) => fc.id === counter.id);
          if (finalCounter) {
            // 缓动函数：easeOutQuart
            const easedProgress = 1 - Math.pow(1 - progress, 4);
            return {
              ...counter,
              value: Math.floor(finalCounter.value * easedProgress),
            };
          }
          return counter;
        });
      });

      if (currentStep === steps) {
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <section
      id="stats-counter"
      className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {counters.map((counter) => (
            <div key={counter.id} className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl text-white">{counter.icon}</div>
                </div>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 animate-count">
                {counter.prefix || ""}
                <span className="counter-value bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {counter.value}
                </span>
                {counter.suffix || ""}
              </div>
              <p className="text-white/90 text-base lg:text-lg font-medium">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
