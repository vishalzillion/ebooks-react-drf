import React, { useState } from 'react';

function AskQuestion() {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const faqs = [
    {
      question: 'How do I download eBooks from your website?',
      answer: 'To download eBooks, log in to your account, go to the eBook detail page, and click on the download button.'
    },
    {
      question: 'Are the eBooks on your website free?',
      answer: 'Yes, we offer a wide range of free eBooks on various topics. Some premium eBooks may have a cost associated.'
    },
    {
      question: 'Can I access my downloaded eBooks offline?',
      answer: 'Yes, after downloading an eBook, you can access it offline using our mobile app or supported eReader software.'
    },
    // Add more FAQ items as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating API call or any action on submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setQuestion('');
    setSubmitted(false);
  };

  return (
    <div className="w-full mx-auto mt-10 mb-96 px-8 py-6 bg-gray-100 rounded-lg shadow-lg" style={{ maxWidth: "calc(100% - 120px)" }}>
      <h2 className="text-3xl font-bold mb-6 text-center">Ask a Question</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="question" className="block text-gray-700 text-sm font-semibold mb-2">
              Your Question
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your question here..."
              required
            />
          </div>

          <button
            type="submit"
            className="block w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Submit Question
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Your question has been submitted!</h3>
          <button
            onClick={handleReset}
            className="block w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Ask Another Question
          </button>
        </div>
      )}
      <div className="max-w-3xl mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default AskQuestion;
