import React from 'react';

function ProductCard({ product, onCopyLink }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-primary">{product.price}</span>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-gray-600">{product.rating}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">수익률: {product.commission}</span>
          <button
            onClick={() => onCopyLink(product.link)}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
          >
            링크 복사
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard; 