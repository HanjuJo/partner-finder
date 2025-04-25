import React, { useState } from 'react';

const reviews = [
  {
    id: 1,
    platform: '쿠팡파트너스',
    author: '김마케터',
    channel: '블로그',
    earnings: 500000,
    period: '1개월',
    content: '처음에는 링크 생성이 어려웠는데, 이 사이트 덕분에 쉽게 시작할 수 있었어요. 특히 수익률 높은 상품 추천이 도움이 많이 됐습니다.',
    tips: '전자제품 카테고리가 수익률이 가장 높아요. 특히 가전제품 리뷰가 효과적이었습니다.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    platform: '애드픽',
    author: '이블로거',
    channel: '인스타그램',
    earnings: 300000,
    period: '2개월',
    content: '패션/뷰티 제품 위주로 마케팅했는데, 예상보다 수익이 잘 나왔어요. SNS 공유 템플릿이 정말 유용했습니다.',
    tips: '해시태그 전략이 중요해요. 트렌드 키워드를 잘 활용하면 클릭률이 높아집니다.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    platform: '링크프라이스',
    author: '박유튜버',
    channel: '유튜브',
    earnings: 1000000,
    period: '3개월',
    content: '글로벌 브랜드와의 제휴가 가능해서 수익이 많이 늘었어요. 특히 해외 배송이 가능한 제품이 인기가 좋았습니다.',
    tips: '영상 썸네일과 제목이 중요해요. 클릭을 유도하는 요소를 잘 활용하세요.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    platform: '애드포스트',
    author: '최인플루언서',
    channel: '인스타그램',
    earnings: 800000,
    period: '2개월',
    content: '높은 수익률과 빠른 정산이 장점이에요. 특히 가구/인테리어 제품이 잘 팔렸습니다.',
    tips: '스토리 하이라이트를 활용하면 효과적이에요. 제품 사용 후기를 자주 올리세요.',
    image: 'https://via.placeholder.com/300x200',
  },
];

function Reviews() {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [sortBy, setSortBy] = useState('earnings'); // earnings, period

  const platforms = ['all', ...new Set(reviews.map(review => review.platform))];

  const filteredReviews = reviews
    .filter(review => selectedPlatform === 'all' || review.platform === selectedPlatform)
    .sort((a, b) => {
      if (sortBy === 'earnings') {
        return b.earnings - a.earnings;
      } else {
        return parseInt(b.period) - parseInt(a.period);
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">성공 사례</h1>
        <div className="flex space-x-4">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="all">전체 플랫폼</option>
            {platforms.filter(p => p !== 'all').map(platform => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="earnings">수익순</option>
            <option value="period">기간순</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={review.image}
              alt={review.platform}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{review.platform}</h3>
                  <p className="text-gray-500">
                    {review.author} • {review.channel}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-bold text-xl">
                    {review.earnings.toLocaleString()}원
                  </p>
                  <p className="text-gray-500 text-sm">{review.period}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review.content}</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">💡 성공 팁</h4>
                <p className="text-gray-600">{review.tips}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews; 