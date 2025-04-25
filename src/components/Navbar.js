import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            링크수익자동화
          </Link>
          <div className="flex space-x-4">
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
      </div>
    </nav>
  );
}

export default Navbar; 