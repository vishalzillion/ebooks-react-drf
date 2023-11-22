import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function TutorialVideo() {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);

  const toggleVideo1 = () => {
    setShowVideo1(!showVideo1);
  };

  const toggleVideo2 = () => {
    setShowVideo2(!showVideo2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Tutorial Videos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleVideo1}>
            <h3 className="text-xl font-bold mb-2">Getting Started</h3>
            <FontAwesomeIcon icon={showVideo1 ? faChevronDown : faChevronRight} className="text-gray-600" />
          </div>
          {showVideo1 && (
            <iframe
              className="w-full h-64 sm:h-96"
              src="https://www.youtube.com/embed/BSaYsHVpaK0"
              title="Tutorial Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          <div className="p-4">
            <p className="text-gray-600">
             How to Login ,Signup and Logout
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleVideo2}>
            <h3 className="text-xl font-bold mb-2">Advanced Features</h3>
            <FontAwesomeIcon icon={showVideo2 ? faChevronDown : faChevronRight} className="text-gray-600" />
          </div>
          {showVideo2 && (
            <iframe
              className="w-full h-64 sm:h-96"
              src="https://www.youtube.com/embed/ANOTHER_VIDEO_ID"
              title="Tutorial Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          <div className="p-4">
            <p className="text-gray-600">
             How to Request a Book , How it Works
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorialVideo;
