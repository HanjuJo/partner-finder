import React, { useState } from 'react';

function Tools() {
  const [url, setUrl] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copyMessage, setCopyMessage] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('instagram');

  const templates = {
    instagram: {
      title: '인스타그램',
      template: `🔥 맛있는 고기 구워먹기 좋은 전기 불판 추천해요!\n\n✅ 안전하고 편리한 사용\n✅ 세척이 쉬워요\n✅ 가성비 최고!\n\n👇 구매하러 가기\n{link}\n\n#고기 #불판 #전기불판 #쿠팡추천`,
    },
    blog: {
      title: '블로그',
      template: `안녕하세요! 오늘은 맛있는 고기를 구워먹기 좋은 전기 불판을 소개해드릴게요.\n\n이 제품의 장점은 다음과 같습니다:\n\n1. 안전하고 편리한 사용\n2. 세척이 쉬워요\n3. 가성비가 최고예요\n\n구매하시려면 아래 링크를 클릭해주세요!\n\n{link}\n\n#고기 #불판 #전기불판 #쿠팡추천`,
    },
    twitter: {
      title: '트위터',
      template: `🔥 맛있는 고기 구워먹기 좋은 전기 불판 추천!\n\n안전하고 편리한 사용, 세척이 쉬워요!\n\n구매하러 가기 👇\n{link}\n\n#고기 #불판 #전기불판`,
    },
  };

  const generateLink = () => {
    if (!url || !partnerId) {
      alert('URL과 파트너 ID를 모두 입력해주세요.');
      return;
    }

    const partnerLink = `${url}?partnerId=${partnerId}`;
    setGeneratedLink(partnerLink);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopyMessage('복사되었습니다!');
    setTimeout(() => setCopyMessage(''), 2000);
  };

  const getTemplateContent = () => {
    if (!generatedLink) return '';
    return templates[selectedTemplate].template.replace('{link}', generatedLink);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">링크 생성 도구</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">상품 URL</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="https://www.coupang.com/vp/products/..."
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">파트너 ID</label>
          <input
            type="text"
            value={partnerId}
            onChange={(e) => setPartnerId(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="파트너 ID를 입력하세요"
          />
        </div>

        <button
          onClick={generateLink}
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors"
        >
          링크 생성하기
        </button>

        {generatedLink && (
          <>
            <div className="pt-4 border-t">
              <h3 className="text-xl font-semibold mb-2">생성된 링크</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={generatedLink}
                  readOnly
                  className="flex-1 p-2 border rounded bg-gray-50"
                />
                <button
                  onClick={() => copyToClipboard(generatedLink)}
                  className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition-colors"
                >
                  복사
                </button>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-xl font-semibold mb-4">SNS 공유 템플릿</h3>
              <div className="flex space-x-4 mb-4">
                {Object.entries(templates).map(([key, template]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTemplate(key)}
                    className={`px-4 py-2 rounded ${
                      selectedTemplate === key
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {template.title}
                  </button>
                ))}
              </div>
              <div className="relative">
                <textarea
                  value={getTemplateContent()}
                  readOnly
                  className="w-full h-40 p-2 border rounded bg-gray-50"
                />
                <button
                  onClick={() => copyToClipboard(getTemplateContent())}
                  className="absolute bottom-2 right-2 bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition-colors"
                >
                  템플릿 복사
                </button>
              </div>
            </div>
          </>
        )}

        {copyMessage && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
            {copyMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default Tools; 