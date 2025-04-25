import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: '주로 다루고 싶은 상품 카테고리는?',
    options: [
      { value: 'electronics', label: '전자제품' },
      { value: 'fashion', label: '패션/뷰티' },
      { value: 'home', label: '가구/인테리어' },
      { value: 'food', label: '식품/생활용품' },
    ],
  },
  {
    id: 2,
    question: '예상 월 수익 목표는?',
    options: [
      { value: 'low', label: '10만원 미만' },
      { value: 'medium', label: '10-50만원' },
      { value: 'high', label: '50만원 이상' },
    ],
  },
  {
    id: 3,
    question: '주로 활동할 채널은?',
    options: [
      { value: 'blog', label: '블로그' },
      { value: 'instagram', label: '인스타그램' },
      { value: 'youtube', label: '유튜브' },
      { value: 'multiple', label: '여러 채널' },
    ],
  },
  {
    id: 4,
    question: '마케팅 경험이 있나요?',
    options: [
      { value: 'none', label: '없음' },
      { value: 'beginner', label: '1년 미만' },
      { value: 'intermediate', label: '1-3년' },
      { value: 'expert', label: '3년 이상' },
    ],
  },
];

const platformRecommendations = {
  electronics: {
    low: ['쿠팡파트너스'],
    medium: ['쿠팡파트너스', '애드픽'],
    high: ['쿠팡파트너스', '애드픽', '링크프라이스'],
  },
  fashion: {
    low: ['애드픽'],
    medium: ['애드픽', '링크프라이스'],
    high: ['링크프라이스', '애드픽', '애드포스트'],
  },
  home: {
    low: ['쿠팡파트너스'],
    medium: ['쿠팡파트너스', '애드포스트'],
    high: ['애드포스트', '쿠팡파트너스', '링크프라이스'],
  },
  food: {
    low: ['쿠팡파트너스'],
    medium: ['쿠팡파트너스', '애드픽'],
    high: ['쿠팡파트너스', '애드픽', '애드포스트'],
  },
};

function PartnerFinder() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendations = () => {
    const category = answers[1];
    const income = answers[2];
    return platformRecommendations[category]?.[income] || [];
  };

  const calculateExpectedEarnings = (platform) => {
    const experience = answers[4];
    const channel = answers[3];
    let baseEarnings = 0;

    switch (platform) {
      case '쿠팡파트너스':
        baseEarnings = 300000;
        break;
      case '애드픽':
        baseEarnings = 250000;
        break;
      case '링크프라이스':
        baseEarnings = 200000;
        break;
      case '애드포스트':
        baseEarnings = 150000;
        break;
      default:
        baseEarnings = 100000;
    }

    // 경험에 따른 보너스
    switch (experience) {
      case 'expert':
        baseEarnings *= 1.5;
        break;
      case 'intermediate':
        baseEarnings *= 1.2;
        break;
      case 'beginner':
        baseEarnings *= 0.8;
        break;
      default:
        baseEarnings *= 0.5;
    }

    // 채널에 따른 보너스
    switch (channel) {
      case 'youtube':
        baseEarnings *= 1.3;
        break;
      case 'instagram':
        baseEarnings *= 1.2;
        break;
      case 'blog':
        baseEarnings *= 1.1;
        break;
      default:
        baseEarnings *= 1;
    }

    return Math.round(baseEarnings);
  };

  if (showResults) {
    const recommendations = getRecommendations();
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">추천 플랫폼</h1>
        <div className="space-y-6">
          {recommendations.map((platform, index) => (
            <div
              key={platform}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{platform}</h3>
                <span className="text-primary font-bold">
                  예상 수익: {calculateExpectedEarnings(platform).toLocaleString()}원/월
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                {platform === '쿠팡파트너스' && '국내 최대 커머스 플랫폼으로 안정적인 수익 창출 가능'}
                {platform === '애드픽' && '다양한 상품군과 높은 수익률로 인기'}
                {platform === '링크프라이스' && '글로벌 브랜드와의 제휴로 해외 수익 가능'}
                {platform === '애드포스트' && '높은 수익률과 빠른 정산으로 인기'}
              </p>
              <a
                href={`https://${platform.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white text-center py-2 rounded hover:bg-primary-dark transition-colors"
              >
                가입하기
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setCurrentQuestion(0);
            setAnswers({});
            setShowResults(false);
          }}
          className="mt-8 block w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 transition-colors"
        >
          다시 시작하기
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">나에게 맞는 파트너 찾기</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500">진행률</span>
            <span className="text-sm text-gray-500">
              {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6">
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="w-full p-4 text-left border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnerFinder; 