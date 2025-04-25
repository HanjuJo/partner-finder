import React, { useState } from 'react';

function Board() {
  const [posts] = useState([
    {
      id: 1,
      title: '쿠팡파트너스 수익률이 가장 높은 상품 추천',
      author: '수익왕',
      date: '2024-03-15',
      views: 1234,
    },
    {
      id: 2,
      title: 'SNS 마케팅 효과 높이는 팁 공유',
      author: '마케터',
      date: '2024-03-14',
      views: 856,
    },
    {
      id: 3,
      title: '제휴 마케팅 초보자를 위한 가이드',
      author: '멘토',
      date: '2024-03-13',
      views: 2103,
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">커뮤니티</h1>
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
          글쓰기
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                제목
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                작성자
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                작성일
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                조회수
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {post.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{post.author}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{post.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{post.views}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-center">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
          <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            이전
          </button>
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            1
          </button>
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            다음
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Board; 