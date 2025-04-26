import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  const benefits = [
    {
      title: '파트너스 수익 최적화',
      description: '각 플랫폼별 최적의 수익률과 전략을 제공하여 수익을 극대화',
      icon: 'bi-graph-up',
      color: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      title: '맞춤형 플랫폼 추천',
      description: '당신의 상황과 목표에 맞는 최적의 파트너스 플랫폼을 추천',
      icon: 'bi-bullseye',
      color: 'bg-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      title: '실전 가이드',
      description: '초보자부터 전문가까지, 단계별 상세한 수익화 가이드 제공',
      icon: 'bi-book',
      color: 'bg-accent/10',
      iconColor: 'text-accent',
    },
    {
      title: '성공 사례 공유',
      description: '실제 파트너스들의 성공 사례와 노하우를 공유',
      icon: 'bi-people',
      color: 'bg-neutral/10',
      iconColor: 'text-neutral',
    },
  ];

  const platforms = [
    {
      name: '쿠팡파트너스',
      commission: '1-7%',
      description: '국내 최대 커머스 플랫폼',
      icon: 'bi-shop',
      color: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      name: '애드픽',
      commission: '3-15%',
      description: '다양한 상품군과 높은 수익률',
      icon: 'bi-graph-up-arrow',
      color: 'bg-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      name: '링크프라이스',
      commission: '2-10%',
      description: '글로벌 브랜드 제휴',
      icon: 'bi-globe',
      color: 'bg-accent/10',
      iconColor: 'text-accent',
    },
  ];

  return (
    <div className="space-y-8 md:space-y-16">
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className="relative text-center py-12 md:py-32 px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              링크로 수익을 간편하게
            </span>
          </h1>
          <p className="text-base md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-neutral/80">
            제휴 마케팅 파트너스로 시작하는<br className="md:hidden" /> 당신을 위한 최고의 가이드
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-6">
            <Link
              to="/platforms"
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:shadow-lg transition-all duration-300 text-center text-sm md:text-base"
            >
              플랫폼 둘러보기
            </Link>
            <Link
              to="/partner-finder"
              className="bg-gradient-to-r from-secondary to-secondary-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:shadow-lg transition-all duration-300 text-center text-sm md:text-base"
            >
              나에게 맞는 플랫폼 찾기
            </Link>
          </div>
        </div>
      </section>

      {/* 주요 플랫폼 섹션 */}
      <section className="px-4 py-8 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            인기 파트너스 플랫폼
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-elegant overflow-hidden hover:shadow-hover transition-all duration-300 border border-gray-100 hover:border-primary/20"
            >
              <div className={`h-32 md:h-48 ${platform.color} flex items-center justify-center`}>
                <i className={`bi ${platform.icon} ${platform.iconColor} text-5xl md:text-7xl`}></i>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-neutral">{platform.name}</h3>
                  <span className="bg-primary/10 text-primary px-3 md:px-4 py-1 rounded-full text-sm font-medium">
                    {platform.commission}
                  </span>
                </div>
                <p className="text-neutral/70 mb-6 text-sm md:text-base">{platform.description}</p>
                <Link
                  to="/platforms"
                  className="text-primary hover:text-primary-dark font-semibold inline-flex items-center text-sm md:text-base"
                >
                  자세히 보기
                  <i className="bi bi-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 이점 섹션 */}
      <section className="px-4 py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            주요 특징
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-elegant hover:shadow-hover transition-all duration-300 border border-gray-100 hover:border-primary/20">
              <div className={`w-12 h-12 md:w-16 md:h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
                <i className={`bi ${benefit.icon} ${benefit.iconColor} text-2xl md:text-3xl`}></i>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-neutral">{benefit.title}</h3>
              <p className="text-neutral/70 text-sm md:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className="relative px-4 py-12 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              지금 바로 시작하세요
            </span>
          </h2>
          <p className="text-neutral/80 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
            파트너스 수익화의 모든 것을 한 곳에서 확인하고, 당신만의 수익화 전략을 만들어보세요.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-6">
            <Link
              to="/guide"
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:shadow-lg transition-all duration-300 text-center text-sm md:text-base"
            >
              가이드 보기
            </Link>
            <Link
              to="/reviews"
              className="bg-gradient-to-r from-secondary to-secondary-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:shadow-lg transition-all duration-300 text-center text-sm md:text-base"
            >
              성공 사례 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 