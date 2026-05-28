import { Trophy } from "lucide-react";

const ReadingChallenge = () => {
  return (
    <div className="bg-[#ececf1] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Left Card */}
        <div className="bg-[#dbe3f5] rounded-[22px] p-5 flex flex-col justify-between min-h-[320px] shadow-2xl">

          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-yellow-700 flex items-center justify-center text-white text-sm">
                🏆
              </div>
              <h2 className="text-sm font-medium text-purple-700">
                Top Readers
              </h2>
            </div>

            {/* Reader List */}
            <div className="space-y-3">

              {/* Active Reader */}
              <div className="bg-white rounded-2xl p-4 border-l-4 border-yellow-600 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-semibold text-purple-700">
                    01
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm text-gray-800">
                      Sophia Martinez
                    </h3>
                    <p className="text-xs text-gray-500">
                      12 Books this month
                    </p>
                  </div>
                </div>

                <span className="text-yellow-600">↗</span>
              </div>

              {/* Reader 2 */}
              <div className="bg-white/70 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-semibold text-purple-700">
                  02
                </div>

                <div>
                  <h3 className="font-semibold text-sm text-gray-800">
                    David Chen
                  </h3>
                  <p className="text-xs text-gray-500">
                    9 Books this month
                  </p>
                </div>
              </div>

              {/* Reader 3 */}
              <div className="bg-white/70 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-semibold text-purple-700">
                  03
                </div>

                <div>
                  <h3 className="font-semibold text-sm text-gray-800">
                    Aria Thompson
                  </h3>
                  <p className="text-xs text-gray-500">
                    8 Books this month
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <button className="text-sm font-semibold text-purple-700 hover:underline mt-8">
            See Leaderboard
          </button>
        </div>

        {/* Right Card */}
        <div className="lg:col-span-2 shadow-2xl bg-gradient-to-r from-[#6436d9] to-[#7f58dd] rounded-[24px] p-6 text-white relative overflow-hidden">

          {/* Badge */}
          <div className="absolute top-5 right-5 text-3xl opacity-50">
            🏅
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-sm text-purple-200 mb-1">
              Reading Challenges
            </h2>

            <p className="text-sm text-purple-100 max-w-lg leading-6">
              Push your limits and earn badges. Complete this month’s
              quest and get a premium membership trial.
            </p>
          </div>

          {/* Challenge 1 */}
          <div className="bg-[#6d40dc] rounded-2xl p-5 mb-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-sm">
                Summer Sci-Fi Sprint
              </h3>

              <span className="bg-yellow-500 text-xs text-black px-3 py-1 rounded-full font-medium">
                In Progress
              </span>
            </div>

            {/* Progress */}
            <div className="w-full h-2 rounded-full bg-purple-300/30 overflow-hidden">
              <div className="w-[65%] h-full bg-yellow-400 rounded-full"></div>
            </div>

            <p className="text-right text-sm text-purple-200 mt-2">
              3/5 Books
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="bg-[#6d40dc] rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-sm">
                Non-Fiction November
              </h3>

              <span className="bg-purple-300/30 text-xs px-3 py-1 rounded-full">
                Upcoming
              </span>
            </div>

            <div className="w-full h-2 rounded-full bg-purple-300/30 overflow-hidden">
              <div className="w-[0%] h-full bg-yellow-400 rounded-full"></div>
            </div>

            <p className="text-right text-sm text-purple-200 mt-2">
              0/3 Books
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-yellow-400 text-black px-5 py-3 rounded-full font-medium text-sm hover:scale-105 transition">
              Start New Challenge
            </button>

            <button className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition">
              My Badges
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingChallenge;