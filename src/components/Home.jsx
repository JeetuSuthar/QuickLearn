import React from 'react';

function Home() {
    return (
        <div className="bg-white min-h-screen flex justify-center items-center flex-col ">
            <div className="text-5xl text-gray-800">
                <span className="rainbow-text">Turn YouTube Videos into Study Material</span>
            </div>
            <p className='text-lg text-gray-600 text-center my-8 px-4 max-w-2xl'>
                Unlock detailed notes and quizzes from your favorite videos with our free AI tool. Save time, enhance productivity, and capture every crucial detail with ease.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md shadow-pink-500">
                <h2 className="text-2xl font-semibold mb-4 text-white text-center">Get Started</h2>
                <input 
                    type="text"
                    className="border-blue-600 w-full p-2 border  rounded-lg mb-4  "
                    placeholder="Paste YouTube URL here"
                />
                <button className="w-full text-white py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-800 to-red-500">
                    Start Learning
                </button>
            </div>
        </div>
    );
}

export default Home;
