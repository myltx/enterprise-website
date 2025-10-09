"use client";

import { useEffect } from "react";

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // 监控页面加载性能
    if (typeof window !== "undefined" && "performance" in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // 记录关键性能指标
          if (entry.entryType === "navigation") {
            const navigationEntry = entry as PerformanceNavigationTiming;
            console.log("页面性能指标:", {
              DNS查询时间:
                navigationEntry.domainLookupEnd -
                navigationEntry.domainLookupStart,
              TCP连接时间:
                navigationEntry.connectEnd - navigationEntry.connectStart,
              请求响应时间:
                navigationEntry.responseEnd - navigationEntry.requestStart,
              DOM解析时间:
                navigationEntry.domContentLoadedEventEnd -
                navigationEntry.domContentLoadedEventStart,
              页面完全加载时间:
                navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
              总加载时间:
                navigationEntry.loadEventEnd - navigationEntry.fetchStart,
            });
          }

          // 监控LCP (Largest Contentful Paint)
          if (entry.entryType === "largest-contentful-paint") {
            console.log("最大内容绘制时间:", entry.startTime);
          }

          // 监控FID (First Input Delay)
          if (entry.entryType === "first-input") {
            const firstInputEntry = entry as PerformanceEventTiming;
            console.log(
              "首次输入延迟:",
              firstInputEntry.processingStart - firstInputEntry.startTime
            );
          }

          // 监控CLS (Cumulative Layout Shift)
          if (
            entry.entryType === "layout-shift" &&
            !(entry as any).hadRecentInput
          ) {
            console.log("累积布局偏移:", (entry as any).value);
          }
        });
      });

      // 观察不同类型的性能指标
      observer.observe({
        entryTypes: [
          "navigation",
          "largest-contentful-paint",
          "first-input",
          "layout-shift",
        ],
      });

      // 监控资源加载
      const resourceObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === "resource") {
            const resourceEntry = entry as PerformanceResourceTiming;
            // 记录慢资源加载
            if (resourceEntry.duration > 1000) {
              console.warn("慢资源加载:", {
                name: resourceEntry.name,
                duration: resourceEntry.duration,
                size: resourceEntry.transferSize,
              });
            }
          }
        });
      });

      resourceObserver.observe({ entryTypes: ["resource"] });

      return () => {
        observer.disconnect();
        resourceObserver.disconnect();
      };
    }
  }, []);

  // 监控内存使用情况
  useEffect(() => {
    if (typeof window !== "undefined" && "memory" in performance) {
      const memory = (performance as any).memory;
      console.log("内存使用情况:", {
        used: Math.round(memory.usedJSHeapSize / 1048576) + "MB",
        total: Math.round(memory.totalJSHeapSize / 1048576) + "MB",
        limit: Math.round(memory.jsHeapSizeLimit / 1048576) + "MB",
      });
    }
  }, []);

  return null; // 这是一个无渲染组件
};

export default PerformanceMonitor;
