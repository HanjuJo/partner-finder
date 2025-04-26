import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Reviews() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);

  // 초기 데이터 로드
  useEffect(() => {
    // 로컬 스토리지에서 좋아요 데이터 로드
    const savedLikedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
    setLikedPosts(savedLikedPosts);

    // 로컬 스토리지에서 조회수 데이터 로드
    const savedViews = JSON.parse(localStorage.getItem('postViews')) || {};

    // 초기 게시글 데이터 설정
    const initialReviews = [
      {
        id: 1,
        category: 'coupang',
        title: '쿠팡파트너스 초보자 가이드: 시작부터 수익화까지',
        author: '링클',
        date: '2024-03-15',
        views: savedViews[1] || 1234,
        likes: savedLikedPosts.includes(1) ? 90 : 89,
        content: '쿠팡파트너스는 국내 최대 커머스 플랫폼인 쿠팡의 제휴 마케팅 프로그램입니다. 이 가이드에서는 초보자도 쉽게 따라할 수 있는 쿠팡파트너스 시작 방법과 수익화 전략을 상세히 설명합니다.',
        tags: ['초보자', '수익전략', '가이드'],
        details: [
          {
            id: 1,
            title: '1. 쿠팡파트너스 시작하기',
            content: [
              '쿠팡파트너스 가입 방법',
              '필요한 준비물 (블로그/유튜브 계정)',
              '초기 설정 및 계정 관리',
              '수익 정산 계좌 등록'
            ]
          },
          {
            id: 2,
            title: '2. 상품 선정 전략',
            content: [
              '수익률 높은 상품 카테고리 분석',
              '트렌드 상품 선정 방법',
              '경쟁력 있는 상품 찾기',
              '상품 가격대별 전략'
            ]
          },
          {
            id: 3,
            title: '3. 콘텐츠 작성 방법',
            content: [
              '효과적인 상품 리뷰 작성법',
              '구매 결정을 유도하는 콘텐츠 전략',
              '이미지와 동영상 활용법',
              'SEO 최적화 팁'
            ]
          },
          {
            id: 4,
            title: '4. 수익 최적화 전략',
            content: [
              '수익률 높은 상품 카테고리',
              '계절별 수익 전략',
              '프로모션 활용법',
              '수익 분석 및 개선 방법'
            ]
          },
          {
            id: 5,
            title: '5. 성공적인 마케팅 방법',
            content: [
              '소셜 미디어 활용 전략',
              '이메일 마케팅 활용법',
              '타겟 고객층 분석',
              '효과적인 광고 전략'
            ]
          }
        ]
      },
      {
        id: 2,
        category: 'adpick',
        title: '애드픽 마스터 가이드: 블로그 수익화의 모든 것',
        author: '링클',
        date: '2024-03-14',
        views: savedViews[2] || 987,
        likes: savedLikedPosts.includes(2) ? 77 : 76,
        content: '애드픽은 다양한 상품군과 높은 수익률을 제공하는 제휴 마케팅 플랫폼입니다. 이 가이드에서는 블로그를 통한 애드픽 수익화 방법을 단계별로 설명합니다.',
        tags: ['블로그', '수익화', '가이드'],
        details: [
          {
            id: 6,
            title: '1. 블로그 시작하기',
            content: [
              '블로그 플랫폼 선택 가이드',
              '초기 설정 및 디자인',
              '도메인 및 호스팅 설정',
              '기본 SEO 설정'
            ]
          },
          {
            id: 7,
            title: '2. 애드픽 가입 및 설정',
            content: [
              '애드픽 가입 절차',
              '계정 설정 및 관리',
              '수익 정산 방법',
              '보안 설정 및 관리'
            ]
          },
          {
            id: 8,
            title: '3. 콘텐츠 기획 전략',
            content: [
              '니치 마켓 선정 방법',
              '콘텐츠 기획 및 작성',
              '이미지 및 동영상 활용',
              '콘텐츠 일정 관리'
            ]
          },
          {
            id: 9,
            title: '4. 수익화 포인트',
            content: [
              '수익률 높은 상품 카테고리',
              '효과적인 상품 추천 방법',
              '프로모션 활용 전략',
              '수익 분석 및 개선'
            ]
          },
          {
            id: 10,
            title: '5. 성공적인 마케팅 방법',
            content: [
              '소셜 미디어 연동 전략',
              '이메일 마케팅 활용',
              '검색 엔진 최적화',
              '광고 전략 및 분석'
            ]
          }
        ]
      },
      {
        id: 3,
        category: 'linkprice',
        title: '링크프라이스 글로벌 마케팅 가이드',
        author: '링클',
        date: '2024-03-13',
        views: savedViews[3] || 856,
        likes: savedLikedPosts.includes(3) ? 66 : 65,
        content: '링크프라이스는 글로벌 브랜드와의 제휴를 통해 해외 시장 공략이 가능한 제휴 마케팅 플랫폼입니다. 이 가이드에서는 글로벌 마케팅 전략과 수익화 방법을 상세히 설명합니다.',
        tags: ['글로벌', '마케팅', '가이드'],
        details: [
          {
            id: 11,
            title: '1. 글로벌 마케팅 전략',
            content: [
              '해외 시장 분석 방법',
              '타겟 국가 선정 기준',
              '문화적 차이 고려사항',
              '글로벌 마케팅 전략 수립'
            ]
          },
          {
            id: 12,
            title: '2. 해외 시장 분석',
            content: [
              '시장 규모 및 성장성 분석',
              '경쟁사 분석 방법',
              '소비자 행동 분석',
              '시장 진입 전략'
            ]
          },
          {
            id: 13,
            title: '3. 콘텐츠 현지화',
            content: [
              '언어 및 문화 현지화',
              '이미지 및 디자인 조정',
              '검색 엔진 최적화',
              '소셜 미디어 전략'
            ]
          },
          {
            id: 14,
            title: '4. 수익화 전략',
            content: [
              '수익률 높은 상품 카테고리',
              '가격 전략 및 정책',
              '프로모션 활용법',
              '수익 분석 및 개선'
            ]
          },
          {
            id: 15,
            title: '5. 성공적인 마케팅 방법',
            content: [
              '글로벌 소셜 미디어 활용',
              '해외 광고 플랫폼 활용',
              '인플루언서 마케팅',
              '성과 측정 및 분석'
            ]
          }
        ]
      }
    ];

    setReviews(initialReviews);
  }, []);

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'coupang', name: '쿠팡파트너스' },
    { id: 'adpick', name: '애드픽' },
    { id: 'linkprice', name: '링크프라이스' },
  ];

  const filteredReviews = selectedCategory === 'all'
    ? reviews
    : reviews.filter(review => review.category === selectedCategory);

  const handleReviewClick = (review) => {
    // 조회수 증가
    const updatedViews = { ...JSON.parse(localStorage.getItem('postViews') || '{}') };
    updatedViews[review.id] = (updatedViews[review.id] || review.views) + 1;
    localStorage.setItem('postViews', JSON.stringify(updatedViews));

    // 조회수 업데이트
    setReviews(prevReviews => 
      prevReviews.map(r => 
        r.id === review.id 
          ? { ...r, views: updatedViews[review.id] }
          : r
      )
    );

    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const handleLike = (reviewId) => {
    const newLikedPosts = likedPosts.includes(reviewId)
      ? likedPosts.filter(id => id !== reviewId)
      : [...likedPosts, reviewId];
    
    setLikedPosts(newLikedPosts);
    localStorage.setItem('likedPosts', JSON.stringify(newLikedPosts));

    // 좋아요 수 업데이트
    setReviews(prevReviews =>
      prevReviews.map(review =>
        review.id === reviewId
          ? {
              ...review,
              likes: likedPosts.includes(reviewId)
                ? review.likes - 1
                : review.likes + 1
            }
          : review
      )
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 카테고리 필터 */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* 게시판 헤더 */}
      <div className="bg-gray-50 rounded-t-lg border border-gray-200">
        <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-gray-700">
          <div className="col-span-1 text-center">번호</div>
          <div className="col-span-5">제목</div>
          <div className="col-span-2 text-center">작성자</div>
          <div className="col-span-2 text-center">작성일</div>
          <div className="col-span-2 text-center">조회/좋아요</div>
        </div>
      </div>

      {/* 게시판 목록 */}
      <div className="border-x border-b border-gray-200 rounded-b-lg">
        {filteredReviews.map((review, index) => (
          <div
            key={review.id}
            onClick={() => handleReviewClick(review)}
            className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            <div className="col-span-1 text-center text-gray-500">{index + 1}</div>
            <div className="col-span-5">
              <div className="font-medium text-gray-900 mb-1">{review.title}</div>
              <div className="flex gap-2">
                {review.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-span-2 text-center text-gray-600">{review.author}</div>
            <div className="col-span-2 text-center text-gray-500">{review.date}</div>
            <div className="col-span-2 text-center text-gray-500">
              <div className="flex justify-center items-center gap-2">
                <span className="flex items-center gap-1">
                  <i className="bi bi-eye"></i>
                  {review.views}
                </span>
                <span 
                  className={`flex items-center gap-1 cursor-pointer ${
                    likedPosts.includes(review.id) ? 'text-red-500' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(review.id);
                  }}
                >
                  <i className="bi bi-heart-fill"></i>
                  {review.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center mt-8 gap-2">
        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
          <i className="bi bi-chevron-left"></i>
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">2</button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">3</button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      {/* 게시글 상세 모달 */}
      {isModalOpen && selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedReview.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="bi bi-x-lg text-xl"></i>
                </button>
              </div>
              
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                <span>{selectedReview.author}</span>
                <span>•</span>
                <span>{selectedReview.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <i className="bi bi-eye"></i>
                  {selectedReview.views}
                </span>
                <span>•</span>
                <span 
                  className={`flex items-center gap-1 cursor-pointer ${
                    likedPosts.includes(selectedReview.id) ? 'text-red-500' : ''
                  }`}
                  onClick={() => handleLike(selectedReview.id)}
                >
                  <i className="bi bi-heart-fill"></i>
                  {selectedReview.likes}
                </span>
              </div>

              <div className="flex gap-2 mb-6">
                {selectedReview.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 mb-6">{selectedReview.content}</p>
                <div className="space-y-6">
                  {selectedReview.details.map((section, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <Link
                          to={`/guide/${section.id}`}
                          className="text-primary hover:text-primary-dark font-semibold inline-flex items-center"
                        >
                          자세히 보기
                          <i className="bi bi-arrow-right ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  닫기
                </button>
                <button 
                  onClick={() => handleLike(selectedReview.id)}
                  className={`px-6 py-2 rounded-lg flex items-center gap-2 ${
                    likedPosts.includes(selectedReview.id)
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
                >
                  <i className="bi bi-heart-fill"></i>
                  {likedPosts.includes(selectedReview.id) ? '좋아요 취소' : '좋아요'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reviews; 