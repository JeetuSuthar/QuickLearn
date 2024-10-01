import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Output() {
  const { videoId } = useParams(); // Get video ID from URL parameters
  const [summary, setSummary] = useState('Loading summary...');
  const [error, setError] = useState(null);

  if (!videoId) {
    return <div className="text-red-500">Error: No video ID provided.</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  // Fetch the video summary from the backend
  useEffect(() => {
    fetch(`http://localhost:5000/summary/${videoId}`) // Call your backend route for summary
      .then(response => response.json())
      .then(data => {
        if (data.summary) {
          setSummary(data.summary); // Set the summary if it's available
        } else {
          setSummary('No summary available for this video.');
        }
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch the summary.');
      });
  }, [videoId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">YouTube Video</h1>
      
      {/* YouTube Video Display */}
      <div className="relative w-full max-w-4xl" style={{ paddingTop: '56.25%' }}>
        <div className="absolute top-0 left-0 w-full h-full lg:h-[55%] rounded-lg overflow-hidden border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <iframe
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Video Summary Section */}
      <div className="mt-6 w-full max-w-4xl text-center bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Video Summary</h2>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p>{summary}</p>
        )}
      </div>
    </div>
  );
}

export default Output;
