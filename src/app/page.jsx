"use client";
import React from "react";

async function getData() {
  const response = await fetch('https://jcxcmpwqxg.execute-api.ap-northeast-1.amazonaws.com/webhook/?keyword=%E5%8C%96%E7%B2%A7%E5%93%81&shop%5B%5D=rakuten&order=relevanceblender');
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json();
}

async function MainComponent() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  const data=await getData();
  //console.log(data);
  

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
            {data.map(item => {
              return(
                <div className="bg-white p-4 rounded shadow-lg">
                  <img
                    src={item.image}
                    alt="化粧品イメージ1"
                    className="w-full h-[250px] object-cover rounded"
                  />
                  <h2 className="mt-2 font-semibold">{item.title}</h2>
                  <p className="text-[#333]">説明がここに入ります。</p>
                  <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded">
                    カートに入れる
                  </button>
                </div>
              )
            })};
          </div>
      </main>
    </div>
  );
}


        //{data.foreach((item) => {

export default MainComponent;
