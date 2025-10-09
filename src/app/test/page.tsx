import React from "react";

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 测试标题 */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            样式测试页面
          </h1>
          <p className="text-lg text-gray-600">验证所有样式是否正常工作</p>
        </div>

        {/* 测试按钮 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">按钮测试</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">主要按钮</button>
            <button className="btn btn-secondary">次要按钮</button>
            <button className="btn btn-outline">轮廓按钮</button>
          </div>
        </div>

        {/* 测试卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">测试卡片 1</h3>
              <p className="text-gray-600">
                这是一个测试卡片，用于验证卡片样式是否正常工作。
              </p>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">测试卡片 2</h3>
              <p className="text-gray-600">
                这是另一个测试卡片，用于验证卡片悬停效果。
              </p>
            </div>
          </div>
        </div>

        {/* 测试颜色 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">颜色测试</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-600 text-white p-4 rounded text-center">
              蓝色
            </div>
            <div className="bg-blue-100 text-blue-700 p-4 rounded text-center">
              浅蓝
            </div>
            <div className="bg-gray-600 text-white p-4 rounded text-center">
              灰色
            </div>
            <div className="bg-gray-100 text-gray-700 p-4 rounded text-center">
              浅灰
            </div>
          </div>
        </div>

        {/* 测试渐变 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">渐变测试</h2>
          <div className="space-y-4">
            <div className="gradient-primary text-white p-6 rounded-lg text-center">
              主要渐变背景
            </div>
            <div className="gradient-secondary p-6 rounded-lg text-center">
              次要渐变背景
            </div>
            <div className="gradient-hero p-6 rounded-lg text-center">
              英雄区域渐变
            </div>
          </div>
        </div>

        {/* 测试文字渐变 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">文字渐变测试</h2>
          <h1 className="text-4xl font-bold text-gradient mb-4">
            渐变文字效果
          </h1>
          <p className="text-lg text-gray-600">普通文字用于对比</p>
        </div>

        {/* 测试响应式 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">响应式测试</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded text-center">
              响应式网格 1
            </div>
            <div className="bg-blue-100 p-4 rounded text-center">
              响应式网格 2
            </div>
            <div className="bg-blue-100 p-4 rounded text-center">
              响应式网格 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
