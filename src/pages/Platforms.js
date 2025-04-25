import React, { useState } from 'react';

// 플랫폼 데이터
const platforms = [
  {
    id: 1,
    name: '쿠팡파트너스',
    commission: '1-7%',
    mainProducts: '전자제품, 생활용품, 식품',
    joinLink: 'https://partners.coupang.com',
    description: '국내 최대 커머스 플랫폼으로 안정적인 수익 창출 가능',
    popularity: 5,
    minPayout: 50000,
    paymentCycle: '월 1회',
  },
  {
    id: 2,
    name: '애드픽',
    commission: '3-15%',
    mainProducts: '전자제품, 패션, 뷰티',
    joinLink: 'https://adpick.co.kr',
    description: '다양한 상품군과 높은 수익률로 인기',
    popularity: 4,
    minPayout: 30000,
    paymentCycle: '월 2회',
  },
  {
    id: 3,
    name: '링크프라이스',
    commission: '2-10%',
    mainProducts: '패션, 뷰티, 가전',
    joinLink: 'https://linkprice.com',
    description: '글로벌 브랜드와의 제휴로 해외 수익 가능',
    popularity: 4,
    minPayout: 50000,
    paymentCycle: '월 1회',
  },
  {
    id: 4,
    name: '애드포스트',
    commission: '5-20%',
    mainProducts: '전자제품, 가구, 인테리어',
    joinLink: 'https://adpost.co.kr',
    description: '높은 수익률과 빠른 정산으로 인기',
    popularity: 3,
    minPayout: 20000,
    paymentCycle: '월 2회',
  },
];

function Platforms() {
  const [sortBy, setSortBy] = useState('popularity'); // popularity, commission
  const [viewMode, setViewMode] = useState('card'); // card, table

  const sortedPlatforms = [...platforms].sort((a, b) => {
    if (sortBy === 'popularity') {
      return b.popularity - a.popularity;
    } else {
      // 수익률 비교 (최대값 기준)
      const aMaxCommission = parseFloat(a.commission.split('-')[1]);
      const bMaxCommission = parseFloat(b.commission.split('-')[1]);
      return bMaxCommission - aMaxCommission;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">제휴 마케팅 플랫폼</h1>
        <div className="flex space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="popularity">인기순</option>
            <option value="commission">수익률순</option>
          </select>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('card')}
              className={`p-2 rounded ${
                viewMode === 'card'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              카드
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded ${
                viewMode === 'table'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              표
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'card' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{platform.name}</h3>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {platform.commission}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>주요 상품: {platform.mainProducts}</p>
                  <p>최소 출금액: {platform.minPayout.toLocaleString()}원</p>
                  <p>정산 주기: {platform.paymentCycle}</p>
                </div>
                <a
                  href={platform.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full bg-primary text-white text-center py-2 rounded hover:bg-primary-dark transition-colors"
                >
                  가입하기
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  플랫폼
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  수익률
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  주요 상품
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  최소 출금액
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  정산 주기
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  가입
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedPlatforms.map((platform) => (
                <tr key={platform.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {platform.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {platform.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-primary font-semibold">
                      {platform.commission}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {platform.mainProducts}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {platform.minPayout.toLocaleString()}원
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {platform.paymentCycle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      href={platform.joinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark"
                    >
                      가입하기
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Platforms; 