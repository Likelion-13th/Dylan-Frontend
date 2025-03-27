import React from "react";

const Perfume = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex flex-col items-center justify-center p-6">
            <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-3xl w-full text-center relative">
                <img 
                    src="https://images.unsplash.com/photo-1600185365483-26efc6fbc2ec?auto=format&fit=crop&w=800&q=80"
                    alt="Perfume"
                    className="w-full h-72 object-cover rounded-2xl mb-6 shadow-md"
                />
                <h1 className="text-5xl font-extrabold text-purple-800 mb-3">
                    야 너두 사장될 수 있어!
                </h1>
                <p className="text-xl text-gray-600 font-medium mb-4">
                    멋쟁이 사자처럼 13기와 함께 향기로운 시작을 🌸
                </p>
                <p className="text-lg text-gray-500 mb-6">
                    당신만의 브랜드, 당신만의 향수. 지금 시작해보세요.
                </p>
                <button className="mt-4 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg font-semibold rounded-full shadow-xl transition-transform transform hover:scale-105">
                    쇼핑 시작하기
                </button>
            </div>
        </div>
    )
}

export default Perfume;