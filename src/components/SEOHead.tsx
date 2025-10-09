"use client";

import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "科技企业 - 创新科技，引领未来",
  description = "我们致力于为客户提供高质量的产品和服务，帮助企业实现数字化转型，提升核心竞争力。",
  keywords = "科技,企业,产品,服务,数字化转型",
  ogImage = "/og-image.jpg",
  ogUrl,
  canonical,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="科技企业" />
      <meta name="language" content="zh-CN" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="科技企业" />
      <meta property="og:locale" content="zh_CN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Theme Color */}
      <meta name="theme-color" content="#0066cc" />
      <meta name="msapplication-TileColor" content="#0066cc" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "科技企业",
            url: "https://example.com",
            logo: "https://example.com/logo.png",
            description: description,
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "400-123-4567",
              contactType: "customer service",
              availableLanguage: "Chinese",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "北京市海淀区科技园区100号",
              addressLocality: "北京",
              addressCountry: "CN",
            },
          }),
        }}
      />
    </Head>
  );
};

export default SEOHead;
