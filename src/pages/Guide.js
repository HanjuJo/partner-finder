import React, { useState } from 'react';

const guides = [
  {
    id: 1,
    title: '제휴 마케팅 초보자 가이드',
    category: 'beginner',
    content: `
      # 제휴 마케팅 시작하기

      ## 1. 제휴 마케팅이란?
      제휴 마케팅은 상품을 판매하는 대신, 판매 링크를 공유하여 발생한 수익의 일부를 받는 방식입니다.

      ## 2. 시작하기 전 준비사항
      - 블로그, 인스타그램, 유튜브 등 콘텐츠 채널
      - 제휴 마케팅 플랫폼 계정
      - 마케팅 전략 수립

      ## 3. 첫 수익 내기
      1. 관심 있는 상품 카테고리 선택
      2. 제품 리뷰 작성
      3. 제휴 링크 공유
      4. 수익 모니터링

      ## 4. 주의사항
      - 정직한 리뷰 작성
      - 개인정보 보호
      - 플랫폼 정책 준수
    `,
    author: '김마케터',
    date: '2024-03-15',
    readTime: '10분',
  },
  {
    id: 2,
    title: '플랫폼별 장단점 비교',
    category: 'comparison',
    content: `
      # 주요 제휴 마케팅 플랫폼 비교

      ## 1. 쿠팡파트너스
      ### 장점
      - 안정적인 수익
      - 다양한 상품군
      - 쉬운 가입 절차

      ### 단점
      - 낮은 수익률
      - 경쟁 심화

      ## 2. 애드픽
      ### 장점
      - 높은 수익률
      - 빠른 정산
      - 다양한 마케팅 도구

      ### 단점
      - 제한된 상품군
      - 높은 가입 기준

      ## 3. 링크프라이스
      ### 장점
      - 글로벌 브랜드
      - 해외 수익 가능
      - 전문적인 지원

      ### 단점
      - 복잡한 가입 절차
      - 높은 최소 출금액
    `,
    author: '이블로거',
    date: '2024-03-14',
    readTime: '15분',
  },
  {
    id: 3,
    title: '수익 최적화 전략',
    category: 'strategy',
    content: `
      # 수익 최적화 전략

      ## 1. 콘텐츠 최적화
      - SEO 최적화
      - 키워드 연구
      - 콘텐츠 품질 향상

      ## 2. 마케팅 채널 활용
      - SNS 통합 마케팅
      - 이메일 마케팅
      - 커뮤니티 활용

      ## 3. 수익 분석
      - 클릭률 분석
      - 전환율 개선
      - 수익성 높은 상품 발굴

      ## 4. 지속적인 개선
      - A/B 테스트
      - 경쟁사 분석
      - 트렌드 파악
    `,
    author: '박유튜버',
    date: '2024-03-13',
    readTime: '20분',
  },
];

function Guide() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGuide, setSelectedGuide] = useState(null);

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'beginner', name: '초보자 가이드' },
    { id: 'comparison', name: '플랫폼 비교' },
    { id: 'strategy', name: '수익 전략' },
  ];

  const filteredGuides = guides.filter(
    guide => selectedCategory === 'all' || guide.category === selectedCategory
  );

  const formatContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-2xl font-bold mb-4">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-xl font-semibold mb-3">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-lg font-semibold mb-2">{line.substring(4)}</h3>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="mb-2">{line}</p>;
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">제휴 마케팅 가이드</h1>

      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredGuides.map(guide => (
          <div
            key={guide.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedGuide(guide)}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{guide.author}</span>
                <span className="mx-2">•</span>
                <span>{guide.date}</span>
                <span className="mx-2">•</span>
                <span>{guide.readTime}</span>
              </div>
              <p className="text-gray-600 line-clamp-3">
                {guide.content.split('\n')[0]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedGuide.title}</h2>
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="prose max-w-none">
                {formatContent(selectedGuide.content)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Guide; 