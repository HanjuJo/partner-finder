import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const benefits = [
    {
      title: '시간 절약',
      description: '복잡한 제휴 마케팅 링크 생성 과정을 자동화하여 몇 초 만에 완료',
      icon: '⏱️',
    },
    {
      title: '수익 최적화',
      description: '수익률이 높은 상품을 우선 추천하여 수익을 최대화',
      icon: '💰',
    },
    {
      title: '마케팅 효율',
      description: 'SNS 공유 템플릿으로 효과적인 마케팅 콘텐츠 제작',
      icon: '📱',
    },
    {
      title: '커뮤니티',
      description: '다른 마케터들과 경험과 노하우를 공유하며 성장',
      icon: '👥',
    },
  ];

  const successStories = [
    {
      name: '김마케터',
      story: '이전에는 링크 생성에 10분 이상 걸렸는데, 이제는 1분도 안 걸려요!',
      earnings: '월 50만원',
    },
    {
      name: '이블로거',
      story: '제공된 템플릿으로 SNS 마케팅이 훨씬 쉬워졌어요.',
      earnings: '월 30만원',
    },
    {
      name: '박유튜버',
      story: '수익률 높은 상품 추천 덕분에 수익이 2배로 늘었습니다.',
      earnings: '월 100만원',
    },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">링크수익자동화</h1>
        <p className="text-xl text-gray-600 mb-8">
          제휴 마케팅 링크로 쉽고 빠르게 수익을 만들어보세요
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/products"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            상품 둘러보기
          </Link>
          <Link
            to="/tools"
            className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition-colors"
          >
            링크 만들기
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">성공 사례</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{story.name}</h3>
                <span className="text-primary font-bold">{story.earnings}</span>
              </div>
              <p className="text-gray-600">{story.story}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">이용 방법</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <h3 className="text-lg font-semibold mb-2">상품 선택</h3>
            <p className="text-gray-600">수익률이 높은 상품을 카테고리별로 찾아보세요</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <h3 className="text-lg font-semibold mb-2">링크 생성</h3>
            <p className="text-gray-600">파트너 ID만 입력하면 자동으로 링크가 생성됩니다</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <h3 className="text-lg font-semibold mb-2">공유하기</h3>
            <p className="text-gray-600">제공된 템플릿으로 SNS에 쉽게 공유하세요</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 