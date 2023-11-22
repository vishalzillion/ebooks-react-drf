import React, { useState } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating API call or any action on submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFeedback('');
    setRating(0);
    setSubmitted(false);
    setIssues([]);
    setSelectedIssue('');
  };

  const handleIssueSelect = (issue) => {
    if (issues.includes(issue)) {
      setIssues(issues.filter((i) => i !== issue));
    } else {
      setIssues([...issues, issue]);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Tell us your experience</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="feedback" className="block text-gray-700 text-sm font-semibold mb-2">
              Share your thoughts
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your feedback here..."
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Rate your experience</label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-2xl focus:outline-none ${
                    star <= rating ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Select issues you faced</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Loading issue"
                  checked={issues.includes('Loading issue')}
                  onChange={() => handleIssueSelect('Loading issue')}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span className="ml-2">Loading issue</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Login issue"
                  checked={issues.includes('Login issue')}
                  onChange={() => handleIssueSelect('Login issue')}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span className="ml-2">Login issue</span>
              </label>
              {/* Add more issue checkboxes */}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Select the main issue</label>
            <select
              value={selectedIssue}
              onChange={(e) => setSelectedIssue(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select one</option>
              <option value="Performance">Performance</option>
              <option value="Navigation">Navigation</option>
              <option value="Account">Account</option>
              {/* Add more options */}
            </select>
          </div>

          <button
            type="submit"
            className="block w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Submit Feedback
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Thank you for sharing!</h3>
          <button
            onClick={handleReset}
            className="block w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Provide Another Feedback
          </button>
        </div>
      )}
    </div>
  );
}

export default Feedback;
