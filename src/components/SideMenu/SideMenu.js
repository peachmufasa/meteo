import React, { useState } from "react";

function SideMenu({ onItemClick }) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    onItemClick(buttonId);
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] w-[360px] px-5 py-6 pb-10 flex flex-col justify-between">
      <div>
        <div className="flex mb-20">
          <img
            src="/profile-avatar.png"
            alt="avatar"
            className="mr-4 w-[90px] h-[90px]"
          />
          <div className="flex flex-col justify-around">
            <span className="font-bold">Игнат Петров</span>
            <span className="font-light text-lg">Роль</span>
          </div>
        </div>
        <ul className="pl-8">
          <li className="menu-list-item">
            <button
              onClick={() => handleButtonClick("register")}
              className={`menu-list-button ${
                selectedButton === "register" ? "text-[#15A1CF]" : ""
              }`}
            >
              Зарегистрировать профиль
            </button>
          </li>
          <li className="menu-list-item">
            <button
              onClick={() => handleButtonClick("users")}
              className={`menu-list-button ${
                selectedButton === "users" ? "text-[#15A1CF]" : ""
              }`}
            >
              Пользователи
            </button>
          </li>
          <li className="menu-list-item">
            <button
              onClick={() => handleButtonClick("posts")}
              className={`menu-list-button ${
                selectedButton === "posts" ? "text-[#15A1CF]" : ""
              }`}
            >
              Посты
            </button>
          </li>
          <li className="menu-list-item">
            <button
              onClick={() => handleButtonClick("status")}
              className={`menu-list-button ${
                selectedButton === "status" ? "text-[#15A1CF]" : ""
              }`}
            >
              Статус работы
            </button>
          </li>
          <li className="menu-list-item">
            <button
              onClick={() => handleButtonClick("logs")}
              className={`menu-list-button ${
                selectedButton === "logs" ? "text-[#15A1CF]" : ""
              }`}
            >
              Просмотр логов
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <button className="btn">Выйти из системы</button>
      </div>
    </div>
  );
}

export default SideMenu;
