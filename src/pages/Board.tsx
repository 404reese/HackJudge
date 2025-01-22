import React from "react";
import { Trophy } from 'lucide-react';
import { FaRegStar } from "react-icons/fa";

export function Board() {
  return (
    <div className="min-h-screen bg-no-repeat bg-center bg-cover">
      <div className="align-middle text-center text-4xl text-gray-800">
        <h1 className="font-minecraft">LEADERBOARD</h1>
      </div>
        
      {/* Podium */}
      <div className="max-w-6xl mx-auto mb-12 mt-16">
        <div className="flex items-end justify-center space-x-8">
          {/* Second Place */}
          <div className="text-center mb-8 opacity-0 scale-95 animate-fade-up animate-delay-200ms">
            <div className="flex items-center justify-center p-4 bg-gray-200 rounded-2xl mb-4">
              <img src="/2.webp" alt="Second Place" className="h-16 w-16 object-cover rounded-full" />
            </div>
            <div className="text-lg font-semibold mb-2 text-gray-800">Skulldugger</div>
            <div className="bg-gray-100 rounded-lg p-3 mb-2">
              <div className="flex justify-center mb-1">
                <FaRegStar className="w-5 h-5 text-yellow-500" />
                {/* <FaRegStar className="w-5 h-5 text-yellow-500" /> */}
              </div>
              <div className="text-sm text-gray-500">Score: 500</div>
            </div>
          </div>

          {/* First Place */}
          <div className="text-center mb-12 -mt-8 opacity-0 scale-95 animate-fade-up animate-delay-400ms">
            <div className="flex items-center justify-center p-4 bg-gray-200 rounded-2xl mb-4">
              <img src="/1.webp" alt="First Place" className="h-28 w-28 object-cover rounded-full" />
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">Klaxxon</div>
            <div className="bg-gray-100 rounded-lg p-3 mb-2">
              <div className="flex justify-center mb-1">
                <FaRegStar className="w-5 h-5 text-yellow-500" />
                {/* <FaRegStar className="w-5 h-5 text-yellow-500" />
                <FaRegStar className="w-5 h-5 text-yellow-500" /> */}
              </div>
              <div className="text-sm text-gray-500">Score: 1500</div>
            </div>
          </div>

          {/* Third Place */}
          <div className="text-center mb-8 opacity-0 scale-95 animate-fade-up animate-delay-600ms">
            <div className="flex items-center justify-center p-4 bg-gray-200 rounded-2xl mb-4">
              <img src="/3.webp" alt="Third Place" className="h-16 w-16 object-cover rounded-full" />
            </div>
            <div className="text-lg font-semibold mb-2 text-gray-800">Ultralex</div>
            <div className="bg-gray-100 rounded-lg p-3 mb-2">
              <div className="flex justify-center mb-1">
                <FaRegStar className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="text-sm text-gray-500">Score: 250</div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-lg">
          <div className="grid grid-cols-3 px-6 py-3 text-sm text-gray-500">
            <div>Place</div>
            <div>Teamname</div>
            <div className="text-right">Score</div>
          </div>
          {[4, 5, 6, 7].map((place, index) => (
            <div
              key={place}
              className={`grid grid-cols-3 px-6 py-4 border-t border-gray-300 opacity-0 animate-slide-up animate-delay-${(index + 1) * 200}ms`}
            >
              <div className="flex items-center">
                <Trophy className="w-4 h-4 text-blue-400 mr-2" />
                {place}
              </div>
              <div>Protesian</div>
              <div className="text-right text-blue-500">156</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

