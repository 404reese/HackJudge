import React, { useState, useEffect } from "react";
import { Trophy, Clock } from 'lucide-react';

export function Board () {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      {/* Podium */}
      <div className="max-w-6xl mx-auto mb-12 mt-16">
        <div className="flex items-end justify-center space-x-8">
          {/* Second Place */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gray-200 rounded-2xl mb-4 flex items-center justify-center text-4xl text-gray-700">
              🎮
            </div>
            <div className="text-lg font-semibold mb-2 text-gray-800">Skulldugger</div>
            <div className="bg-gray-100 rounded-lg p-3 mb-2">
              <Trophy className="w-5 h-5 mx-auto mb-1 text-yellow-500" />
              <div className="text-sm text-gray-500">Score: 500</div>
            </div>
            <div className="flex items-center justify-center text-blue-500">
              <Trophy className="w-4 h-4 mr-1" />
              <span>Score: 5 000</span>
            </div>
            <div className="text-xs text-gray-500">Domain: AI/ML</div>
          </div>

          {/* First Place */}
          <div className="text-center mb-12 -mt-8">
            <div className="w-32 h-32 bg-gray-200 rounded-2xl mb-4 flex items-center justify-center text-5xl text-gray-700">
              👾
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">Klaxxon</div>
            <div className="bg-gray-100 rounded-lg p-3 mb-2">
              <Trophy className="w-5 h-5 mx-auto mb-1 text-yellow-500" />
              <div className="text-sm text-gray-500">Score: 1500</div>
            </div>
            <div className="flex items-center justify-center text-blue-500">
              <Trophy className="w-4 h-4 mr-1" />
              <span>Score: 10 000</span>
            </div>
            <div className="text-xs text-gray-500">Domain: Web Dev</div>
          </div>

          {/* Third Place */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gray-200 rounded-2xl mb-4 flex items-center justify-center text-4xl text-gray-700">
              💀
            </div>
            <div className="text-lg font-semibold mb-2 text-gray-800">Ultralex</div>
            <div className="bg-gray-100 rounded-lg p-3 mb-2">
              <Trophy className="w-5 h-5 mx-auto mb-1 text-yellow-500" />
              <div className="text-sm text-gray-500">Score: 250</div>
            </div>
            <div className="flex items-center justify-center text-blue-500">
              <Trophy className="w-4 h-4 mr-1" />
              <span>Score: 2 500</span>
            </div>
            <div className="text-xs text-gray-500">Domain: Data Science</div>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-lg">
          <div className="grid grid-cols-4 px-6 py-3 text-sm text-gray-500">
            <div>Place</div>
            <div>Teamname</div>
            <div>Score</div>
            <div className="text-right">Domain</div>
          </div>
          {[4, 5, 6].map((place) => (
            <div
              key={place}
              className="grid grid-cols-4 px-6 py-4 border-t border-gray-300"
            >
              <div className="flex items-center">
                <Trophy className="w-4 h-4 text-blue-400 mr-2" />
                {place}
              </div>
              <div>Protesian</div>
              <div>156</div>
              <div className="text-right text-blue-500">AI/ML</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
