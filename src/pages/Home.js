import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  const benefits = [
    {
      title: '파트너스 수익 최적화',
      description: '각 플랫폼별 최적의 수익률과 전략을 제공하여 수익을 극대화',
      icon: '💰',
    },
    {
      title: '맞춤형 플랫폼 추천',
      description: '당신의 상황과 목표에 맞는 최적의 파트너스 플랫폼을 추천',
      icon: '🎯',
    },
    {
      title: '실전 가이드',
      description: '초보자부터 전문가까지, 단계별 상세한 수익화 가이드 제공',
      icon: '📚',
    },
    {
      title: '성공 사례 공유',
      description: '실제 파트너스들의 성공 사례와 노하우를 공유',
      icon: '👥',
    },
  ];

  const platforms = [
    {
      name: '쿠팡파트너스',
      commission: '1-7%',
      description: '국내 최대 커머스 플랫폼',
      icon: 'bi-shop',
      color: 'bg-orange-500',
    },
    {
      name: '애드픽',
      commission: '3-15%',
      description: '다양한 상품군과 높은 수익률',
      icon: 'bi-graph-up-arrow',
      color: 'bg-indigo-500',
    },
    {
      name: '링크프라이스',
      commission: '2-10%',
      description: '글로벌 브랜드 제휴',
      icon: 'bi-globe',
      color: 'bg-emerald-500',
    },
  ];

  return (
    <div className="space-y-12">
      {/* 히어로 섹션 */}
      <section className="text-center py-16 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg">
        <h1 className="text-5xl font-bold mb-6">파트너스 수익화 가이드</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          제휴 마케팅 파트너스로 시작하는 당신을 위한 최고의 가이드
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/platforms"
            className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            플랫폼 둘러보기
          </Link>
          <Link
            to="/partner-finder"
            className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary-dark transition-colors"
          >
            나에게 맞는 플랫폼 찾기
          </Link>
        </div>
      </section>

      {/* 주요 플랫폼 섹션 */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">인기 파트너스 플랫폼</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`h-48 ${platform.color} flex items-center justify-center`}>
                <i className={`bi ${platform.icon} text-white text-6xl`}></i>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{platform.name}</h3>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {platform.commission}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <Link
                  to="/platforms"
                  className="text-primary hover:text-primary-dark font-semibold"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 이점 섹션 */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </section>

      {/* CTA 섹션 */}
      <section className="bg-gray-50 p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          파트너스 수익화의 모든 것을 한 곳에서 확인하고, 당신만의 수익화 전략을 만들어보세요.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/guide"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            가이드 보기
          </Link>
          <Link
            to="/reviews"
            className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition-colors"
          >
            성공 사례 보기
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home; 