"use client"

import React, { useState, useEffect } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // 初始化AOS动画
  useEffect(() => {
    const initializeAOS = async () => {
      if (typeof window !== 'undefined') {
        const AOS = (await import('aos')).default;
        AOS.init({
          once: true,
          duration: 1000
        });
      }
    };
    initializeAOS();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // 重置表单
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // 5秒后重置成功状态
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      title: '电话',
      content: '400-123-4567',
      icon: '📞'
    },
    {
      title: '邮箱',
      content: 'contact@company.com',
      icon: '✉️'
    },
    {
      title: '地址',
      content: '北京市朝阳区建国路88号',
      icon: '📍'
    },
    {
      title: '工作时间',
      content: '周一至周五 9:00-18:00',
      icon: '⏰'
    }
  ];

  const socialLinks = [
    {
      url: 'https://www.weixin.com',
      icon: '🔵'
    },
    {
      url: 'https://www.weibo.com',
      icon: '🔴'
    },
    {
      url: 'https://www.linkedin.com',
      icon: '💼'
    }
  ];

  return (
    <div>
      {/* 页面头部 */}
      <section className="relative h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/id/30/1920/400)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">联系我们</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-white text-lg max-w-2xl mx-auto">
            如有任何问题或需求，请随时与我们联系，我们将竭诚为您服务
          </p>
        </div>
      </section>

      {/* 联系信息和表单 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 联系信息 */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-primary mb-6">联系信息</h2>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-dark mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 社交媒体链接 */}
              <div className="mt-10">
                <h3 className="text-lg font-medium text-dark mb-4">关注我们</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 联系表单 */}
            <div data-aos="fade-left">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-6">发送消息</h2>
                
                {submitSuccess ? (
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <h3 className="text-xl font-medium text-green-700 mb-2">发送成功！</h3>
                    <p className="text-green-600">感谢您的留言，我们会尽快与您联系。</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">姓名 *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          placeholder="请输入您的姓名"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">邮箱 *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          placeholder="请输入您的邮箱"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2">主题 *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        placeholder="请输入消息主题"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">消息内容 *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                        placeholder="请输入您的消息内容"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 bg-primary text-white font-medium rounded-lg transition-all duration-300 hover:bg-primary/90 transform hover:translate-y-[-2px] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? '发送中...' : '发送消息'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 地图 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-200">
            {/* 这里可以放置实际的地图组件 */}
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/id/1031/1920/400)' }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;