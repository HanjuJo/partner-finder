import React, { useState } from 'react';

function Estimate() {
  const [clicks, setClicks] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [averageOrder, setAverageOrder] = useState(0);
  const [commission, setCommission] = useState(0);

  const calculateEarnings = () => {
    const conversions = clicks * (conversionRate / 100);
    const totalSales = conversions * averageOrder;
    const earnings = totalSales * (commission / 100);
    return earnings.toFixed(2);
  };

  const examples = [
    {
      title: '인스타그램 마케터',
      clicks: 1000,
      conversionRate: 2,
      averageOrder: 50000,
      commission: 5,
      description: '월 1,000회 클릭 기준',
    },
    {
      title: '블로그 운영자',
      clicks: 5000,
      conversionRate: 1.5,
      averageOrder: 100000,
      commission: 7,
      description: '월 5,000회 클릭 기준',
    },
    {
      title: '유튜버',
      clicks: 10000,
      conversionRate: 3,
      averageOrder: 30000,
      commission: 6,
      description: '월 10,000회 클릭 기준',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">수익 계산기</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-xl font-semibold mb-4">수익 계산하기</h2>
          <div>
            <label className="block text-gray-700 mb-2">예상 클릭 수</label>
            <input
              type="number"
              value={clicks}
              onChange={(e) => setClicks(Number(e.target.value))}
              className="w-full p-2 border rounded"
              min="0"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">전환율 (%)</label>
            <input
              type="number"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full p-2 border rounded"
              min="0"
              max="100"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">평균 주문 금액 (원)</label>
            <input
              type="number"
              value={averageOrder}
              onChange={(e) => setAverageOrder(Number(e.target.value))}
              className="w-full p-2 border rounded"
              min="0"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">수수료율 (%)</label>
            <input
              type="number"
              value={commission}
              onChange={(e) => setCommission(Number(e.target.value))}
              className="w-full p-2 border rounded"
              min="0"
              max="100"
            />
          </div>

          <div className="pt-4 border-t">
            <h3 className="text-xl font-semibold mb-2">예상 수익</h3>
            <p className="text-3xl font-bold text-primary">
              {calculateEarnings()}원
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">실제 수익 예시</h2>
          {examples.map((example, index) => {
            const earnings = (example.clicks * (example.conversionRate / 100) * example.averageOrder * (example.commission / 100)).toFixed(2);
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{example.title}</h3>
                    <p className="text-gray-600 text-sm">{example.description}</p>
                  </div>
                  <span className="text-primary font-bold text-xl">{earnings}원</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">클릭 수:</span>
                    <span className="ml-2">{example.clicks.toLocaleString()}회</span>
                  </div>
                  <div>
                    <span className="text-gray-500">전환율:</span>
                    <span className="ml-2">{example.conversionRate}%</span>
                  </div>
                  <div>
                    <span className="text-gray-500">평균 주문:</span>
                    <span className="ml-2">{example.averageOrder.toLocaleString()}원</span>
                  </div>
                  <div>
                    <span className="text-gray-500">수수료율:</span>
                    <span className="ml-2">{example.commission}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Estimate; 