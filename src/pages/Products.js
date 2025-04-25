import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const categories = [
  { id: 'all', name: '전체' },
  { id: 'kitchen', name: '주방용품' },
  { id: 'pos', name: 'POS기기' },
  { id: 'furniture', name: '가구' },
  { id: 'electronics', name: '전자제품' },
];

const products = [
  {
    id: 1,
    name: '전기 불판',
    description: '안전하고 편리한 전기 불판으로 맛있는 고기를 구워보세요.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://www.coupang.com/vp/products/123456789',
    commission: '5%',
    category: 'kitchen',
    price: '89,000원',
    rating: 4.5,
  },
  {
    id: 2,
    name: '무인 주문기',
    description: '손님의 대기 시간을 줄이고 효율적인 주문 처리가 가능한 무인 주문기.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://www.coupang.com/vp/products/987654321',
    commission: '7%',
    category: 'pos',
    price: '299,000원',
    rating: 4.8,
  },
  {
    id: 3,
    name: '식당 테이블',
    description: '내구성이 뛰어나고 관리가 쉬운 식당용 테이블입니다.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://www.coupang.com/vp/products/456789123',
    commission: '4%',
    category: 'furniture',
    price: '159,000원',
    rating: 4.3,
  },
  {
    id: 4,
    name: '냉장고',
    description: '대용량 냉장고로 식재료를 신선하게 보관하세요.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://www.coupang.com/vp/products/789123456',
    commission: '6%',
    category: 'electronics',
    price: '899,000원',
    rating: 4.7,
  },
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copyMessage, setCopyMessage] = useState('');
  const [sortBy, setSortBy] = useState('commission'); // commission, price, rating

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link);
    setCopyMessage('링크가 복사되었습니다!');
    setTimeout(() => setCopyMessage(''), 2000);
  };

  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'commission') {
        return parseFloat(b.commission) - parseFloat(a.commission);
      } else if (sortBy === 'price') {
        return parseFloat(b.price.replace(/[^0-9]/g, '')) - parseFloat(a.price.replace(/[^0-9]/g, ''));
      } else {
        return b.rating - a.rating;
      }
    });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">추천 상품</h1>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="commission">수익률순</option>
          <option value="price">가격순</option>
          <option value="rating">평점순</option>
        </select>
      </div>

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

      {copyMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
          {copyMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onCopyLink={handleCopyLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Products; 