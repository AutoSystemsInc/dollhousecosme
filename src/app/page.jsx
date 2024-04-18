"use client";
import React from "react";

function MainComponent() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <div className="min-h-screen bg-[#fef6f9] font-roboto">
      <nav className="bg-pink-200 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#121212]">化粧品ショップ</h1>
          {isLoggedIn ? (
            <button
              className="bg-pink-400 text-white px-4 py-2 rounded"
              onClick={logout}
            >
              ログアウト
            </button>
          ) : (
            <button
              className="bg-pink-400 text-white px-4 py-2 rounded"
              onClick={login}
            >
              ログイン
            </button>
          )}
        </div>
      </nav>
      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-lg">
            <img
              src="path/to/product/image1"
              alt="化粧品イメージ1"
              className="w-full h-[250px] object-cover rounded"
            />
            <h2 className="mt-2 font-semibold">化粧品1</h2>
            <p className="text-[#333]">説明がここに入ります。</p>
            <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded">
              カートに入れる
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow-lg">
            <img
              src="path/to/product/image2"
              alt="化粧品イメージ2"
              className="w-full h-[250px] object-cover rounded"
            />
            <h2 className="mt-2 font-semibold">化粧品2</h2>
            <p className="text-[#333]">説明がここに入ります。</p>
            <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded">
              カートに入れる
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow-lg">
            <img
              src="path/to/product/image3"
              alt="化粧品イメージ3"
              className="w-full h-[250px] object-cover rounded"
            />
            <h2 className="mt-2 font-semibold">化粧品3</h2>
            <p className="text-[#333]">説明がここに入ります。</p>
            <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded">
              カートに入れる
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainComponent;