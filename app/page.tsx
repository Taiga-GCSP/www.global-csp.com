"use client";

import { useState, useEffect } from "react";

// Company name component with colored initials
function CompanyName({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      <span style={{ color: "#DC2626" }}>G</span>lobal{" "}
      <span style={{ color: "#DC2626" }}>C</span>onnect{" "}
      <span style={{ color: "#DC2626" }}>S</span>trategy{" "}
      <span style={{ color: "#DC2626" }}>P</span>artners
    </span>
  );
}

// Smooth scroll function
function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "事業内容", id: "services" },
    { label: "代表紹介", id: "profile" },
    { label: "実績", id: "results" },
    { label: "料金", id: "fee" },
    { label: "お問い合わせ", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            {/* ▽▽▽ 修正箇所 ▽▽▽ */}
            <div
              className="w-52 h-52 lg:w-54 lg:h-54 flex items-center justify-center rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src="/logo.png.png" // publicフォルダの画像ファイル名
                alt="Logo"
                className="w-full h-full object-contain p-1" // 枠からはみ出さないよう自動調整
              />
            </div>
            {/* △△△ ここまで △△△ */}
            
            <div className="hidden sm:block">
              <CompanyName className="text-sm lg:text-base font-semibold text-gray-900" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

// Animated Background Component
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base - mostly white */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Soft gradient orbs - very subtle */}
      <div 
        className="absolute -top-1/3 -right-1/4 w-[900px] h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(254,202,202,0.25) 0%, transparent 60%)",
          animation: "drift 30s ease-in-out infinite",
        }}
      />
      <div 
        className="absolute -bottom-1/3 -left-1/4 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(252,165,165,0.2) 0%, transparent 55%)",
          animation: "drift 25s ease-in-out infinite reverse",
        }}
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(248,113,113,0.1) 0%, transparent 50%)",
          animation: "drift 35s ease-in-out infinite",
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -20px);
          }
        }
      `}</style>
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <CompanyName className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
          ビジネスの
          <span style={{ color: "#DC2626" }}>成長</span>を
          <br className="sm:hidden" />
          加速させる
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
          AI×DXコンサルティング、海外進出支援、営業代行を
          <br className="hidden sm:block" />
          ワンストップで提供いたします
        </p>

        <button
          onClick={() => scrollToSection("contact")}
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          style={{ backgroundColor: "#DC2626" }}
        >
          お問い合わせ
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      title: "AI×DXコンサルタント",
      description:
        "業務プロセスの自動化から、AIツールの導入・運用まで。御社のデジタルトランスフォーメーションを包括的にサポートいたします。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "海外進出支援",
      description:
        "市場調査からビジネスインフラの構築、現地パートナーとの連携まで。御社のグローバル展開を現地目線でサポートいたします。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "営業代行",
      description:
        "テレアポから商談同席、クロージングまで。泥臭い現場仕事も厭わない機動力で、御社の売上拡大に直接貢献いたします。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background - mostly white */}
      <div className="absolute inset-0 bg-white" />

      {/* Soft gradient orbs */}
      <div 
        className="absolute -top-1/4 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(254,202,202,0.2) 0%, transparent 55%)",
          animation: "drift 28s ease-in-out infinite",
        }}
      />
      <div 
        className="absolute bottom-0 -left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(252,165,165,0.15) 0%, transparent 50%)",
          animation: "drift 22s ease-in-out infinite reverse",
        }}
      />

      <style jsx>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -15px); }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            事業内容
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            3つの柱で、御社のビジネス成長を力強くサポートいたします
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200"
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                style={{ backgroundColor: "#fef2f2", color: "#DC2626" }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Profile Section
function ProfileSection() {
  return (
    <section id="profile" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background - mostly white */}
      <div className="absolute inset-0 bg-white" />

      {/* Soft gradient orbs */}
      <div 
        className="absolute top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(254,202,202,0.18) 0%, transparent 55%)",
          animation: "drift 26s ease-in-out infinite",
        }}
      />
      <div 
        className="absolute -bottom-1/4 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(252,165,165,0.15) 0%, transparent 50%)",
          animation: "drift 20s ease-in-out infinite reverse",
        }}
      />

      <style jsx>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-25px, 20px); }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            代表紹介
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div
              className="w-64 h-80 sm:w-80 sm:h-96 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#e5e7eb" }}
            >
              <div className="text-center text-gray-500">
                <svg
                  className="w-20 h-20 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <p className="text-sm">代表写真</p>
                <p className="text-xs mt-1">Photo Placeholder</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="order-2 lg:order-2">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                代表挨拶
              </h3>
              <div
                className="w-16 h-1 rounded-full mb-4"
                style={{ backgroundColor: "#DC2626" }}
              />
              
              {/* 代表者名を追加 */}
              <div className="mb-6">
                <span className="text-xl font-bold text-gray-900">福田 大河</span>
                <span className="text-sm text-gray-500 ml-2">Taiga Fukuda</span>
              </div>

              {/* 💡 福田さんのオリジナルの熱い文章に差し替えました */}
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  はじめまして、Global Connect Strategy Partners 代表の福田大河です。
                </p>
                <p>
                  私は大学卒業後、22歳でフィリピンへ渡りました。そこで多くの刺激と挑戦の機会に触れ、23歳という若さで起業を決意いたしました。
                </p>
                <p>
                  現代は、あらゆる可能性を自分自身で選択できる時代です。そんな時代において、自らの意志で独立し、日々挑戦を続けている経営者の方々と共に成長したい。その強い想いからこの事業を立ち上げました。
                </p>
                <p>
                  まだまだ信用も実績もゼロからのスタートです。だからこそ、誰よりも泥臭く、自分の道を突き進んでまいります。皆様のビジネスに寄り添うパートナーとして、ともに高みを目指し、全力で駆け抜けていきましょう。
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                <div>
                  <p className="text-gray-900 font-semibold">
                    <CompanyName className="text-sm" />
                  </p>
                  <p className="text-gray-600 text-sm">代表</p>
                </div>
                {/* 略歴などをコンパクトに追加（必要なければこのdivごと消してOKです） */}
                <div className="text-right text-xs text-gray-500 space-y-1">
                  <p>2025年 単身フィリピンへ渡航</p>
                  <p>2026年 当社設立</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Results Section
function ResultsSection() {
  const results = [
    {
      title: "店舗DX",
      category: "AI×DX",
      description:
        "最短3日からのウェブサイト作成、予約、注文システムの構築を行います。",
    },
    {
      title: "日系スタートアップの海外進出支援",
      category: "海外進出",
      description:
        "現地法人設立からビザ、銀行口座開設、オフィス契約まで一気通貫でサポートします。",
    },
    {
      title: "BtoB新規開拓営業代行",
      category: "営業代行",
      description:
        "圧倒的な行動量とPDCAサイクルで最短で成約を獲得します。",
    },
    {
      title: "製造業のDX推進プロジェクト",
      category: "AI×DX",
      description:
        "生産管理システムとAIを連携させ、在庫予測精度を向上させます。",
    },
    {
      title: "グローバルDX",
      category: "海外進出",
      description:
        "採用システムから教育過程での多言語サポート体制まで構築します。",
    },
  ];

  return (
    <section id="results" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background - mostly white */}
      <div className="absolute inset-0 bg-white" />

      {/* Soft gradient orbs */}
      <div 
        className="absolute -top-1/4 left-1/4 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(254,202,202,0.15) 0%, transparent 55%)",
          animation: "drift 32s ease-in-out infinite",
        }}
      />
      <div 
        className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(248,113,113,0.12) 0%, transparent 50%)",
          animation: "drift 24s ease-in-out infinite reverse",
        }}
      />

      <style jsx>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -25px); }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            実績
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            様々な業界・規模のお客様の課題解決に取り組んでまいりました
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 flex flex-col"
            >
              <div className="mb-4">
                <span
                  className="inline-block px-3 py-1 text-sm font-medium rounded-full"
                  style={{ backgroundColor: "#fef2f2", color: "#DC2626" }}
                >
                  {result.category}
                </span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
                {result.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const plans = [
    {
      title: "AI×DXコンサルティング",
      price: "19,800",
      period: "月額",
      description: "低コストで始められるAI導入・DX推進の伴走サポートプランです",
      features: [
        "最短3日からの業務効率化",
        "チャットでの24時間相談・質問",
        "月2回以上の訪問・オンライン面談",
        "社内向けミニ勉強会の実施",
      ],
      highlight: true, // このカードを目立たせる
    },
    {
      title: "海外進出支援",
      price: "50,000",
      period: "〜 / 件",
      description: "海外進出における必要な手続き、現地でのテストマーケティングで完全サポート",
      features: [
        "要件定義・設計のサポート",
        "ビザ・設立手続きの完全サポート",
        "納得いくまでのテストマーケティング代行",
        "設立後の1ヶ月間アフターフォロー",
      ],
      highlight: false,
    },
    {
      title: "営業代行",
      price: "完全歩合制",
      period: "〜 / 件",
      description: "アポイントからクロージングまで一括支援、海外顧客も対応可",
      features: [
        "丸投げOK完全自立型営業代行",
        "海外顧客への営業",
        "最短で成果を出すパワー営業",
        "エリアの指定なしの広範囲営業",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            料金体系
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            お客様の規模や目的に合わせた、わかりやすい料金プランをご用意しています。
          </p>
        </div>

        {/* 💡 grid-cols-1 から md:grid-cols-3 に変更し、3つ横並びにしました */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlight
                  ? "border-2 border-red-600 shadow-xl shadow-red-600/5 md:scale-105 z-10"
                  : "border border-gray-100 shadow-md hover:shadow-lg"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-3 py-0.5 rounded-full text-xs font-bold">
                  おすすめ
                </span>
              )}

              <div>
                {/* 💡 文字サイズを少し小さく（text-lg）調整 */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-500 text-xs mb-6">
                  {plan.description}
                </p>
                
                {/* 💡 金額部分のサイズも少しコンパクトに */}
                <div className="flex items-baseline mb-6">
                  <span className="text-gray-500 text-xs mr-1">{plan.period}</span>
                  <span className="text-3xl lg:text-4xl font-extrabold text-gray-900">
                    ¥{plan.price}
                  </span>
                  <span className="text-gray-500 text-xs ml-1">（税込）</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-xs">
                      <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full text-center py-2.5 rounded-lg text-sm font-bold transition-all ${
                  plan.highlight
                    ? "bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/20"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                相談する
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden bg-white">
      {/* 💡 背景の装飾：エラーの原因になる <style jsx> を削除し、標準のクラス（animate-pulse等）に置き換えました */}
      <div 
        className="absolute top-0 -left-1/4 w-[700px] h-[700px] rounded-full opacity-30 animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(100,116,139,0.1) 0%, transparent 55%)",
        }}
      />
      <div 
        className="absolute -bottom-1/4 right-0 w-[800px] h-[800px] rounded-full opacity-20 animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ご相談・お見積りは無料です。
            <br className="hidden sm:block" />
            まずはお気軽にお問い合わせください。
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-2xl mx-auto">
          <div className="p-8 lg:p-12" style={{ backgroundColor: "#fafafa" }}>
            
            {/* 電話・メール直通ボタン */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <a
                href="tel:08025961528"
                className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-lg text-base font-bold hover:bg-gray-50 hover:border-red-600 hover:text-red-600 transition-all transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.66l1.34 3.34a1 1 0 01-.23 1.05L8.74 9.7a13.16 13.16 0 005.56 5.56l1.65-1.65a1 1 0 011.05-.23l3.34 1.34a1 1 0 01.66.94V19a2 2 0 01-2 2h-1C9.71 21 3 14.29 3 6V5z" />
                </svg>
                電話で相談する
              </a>

              <a
                href="mailto:taigafukuda@global-csp.com"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-bold hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                メールで相談する
              </a>
            </div>

            {/* 区切り線 */}
            <div className="relative flex items-center justify-center mb-10">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="px-4 text-sm text-gray-500 absolute" style={{ backgroundColor: "#fafafa" }}>
                またはフォームから
              </span>
            </div>

           {/* ▽▽▽ Tallyフォームの埋め込み（あなたのフォームIDを設定済み） ▽▽▽ */}
           <div className="w-full min-h-[600px]">
              <iframe
                src="https://tally.so/embed/obdONx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="100%"
                style={{ minHeight: "600px" }}
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="お問い合わ"
                className="w-full"
              ></iframe>
            </div>
            {/* △△△ ここまで △△△ */}

          </div>
        </div>
      </div>
    </section>
  );
}

{/* ▽▽▽ Tallyフォームの埋め込み（ロゴを隠す調整済み） ▽▽▽ */}
            {/* 💡 親要素に relative と overflow-hidden を設定して、はみ出た部分をカットします */}
            <div className="w-full h-[520px] overflow-hidden relative border border-gray-100 rounded-xl">
              <iframe
                src="https://tally.so/embed/obdONx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="600" // 💡 実際のフォームより少し高めに設定しておきます
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="お問い合わせ"
                className="absolute top-0 left-0 w-full"
                style={{ height: "600px" }}
              ></iframe>
              
              {/* 💡 白い背景の時は、最下部に目隠し用の白いグラデーションを重ねてロゴを完全に防衛します */}
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#fafafa] to-transparent pointer-events-none"></div>
            </div>
            {/* △△△ ここまで △△△ */}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-lg"
              style={{ backgroundColor: "#374151" }}
            >
              <span className="text-white font-bold text-lg">GC</span>
            </div>
            <span className="text-lg font-semibold">
              Global Connect Strategy Partners
            </span>
          </div>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Global Connect Strategy Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProfileSection />
      <ResultsSection />
      <PricingSection /> {/* 👈 ここに追加しました */}
      <ContactSection />
      <Footer />
    </main>
  );
}