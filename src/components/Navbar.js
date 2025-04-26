import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              링클
            </span>
            <span className="text-sm md:text-base text-neutral/70 hidden md:inline">
              - 링크로 수익을 간편하게
            </span>
          </Link>
          
          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden text-gray-700 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
          </button>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex space-x-4">
            <Link to="/platforms" className="text-gray-700 hover:text-primary">
              플랫폼
            </Link>
            <Link to="/partner-finder" className="text-gray-700 hover:text-primary">
              파트너 찾기
            </Link>
            <Link to="/reviews" className="text-gray-700 hover:text-primary">
              성공 사례
            </Link>
            <Link to="/guide" className="text-gray-700 hover:text-primary">
              가이드
            </Link>
            <Link to="/estimate" className="text-gray-700 hover:text-primary">
              수익 계산기
            </Link>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              to="/platforms"
              className="block text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              플랫폼
            </Link>
            <Link
              to="/partner-finder"
              className="block text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              파트너 찾기
            </Link>
            <Link
              to="/reviews"
              className="block text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              성공 사례
            </Link>
            <Link
              to="/guide"
              className="block text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              가이드
            </Link>
            <Link
              to="/estimate"
              className="block text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              수익 계산기
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 