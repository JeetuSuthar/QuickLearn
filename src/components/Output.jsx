import React from 'react';
import { useParams } from 'react-router-dom';

function Output() {
  const { videoId } = useParams();

  if (!videoId) {
    return <div className="text-red-500">Error: No video ID provided.</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">YouTube Video</h1>
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
    </div>
  );
}

export default Output;
