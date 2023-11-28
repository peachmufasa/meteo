import { useState } from "react";
import SectionHeader from "../CommonComponents/SectionHeader";

function Posts() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="bg-[#1C1C1C] rounded-3xl border-transparent m-20 w-[1400px] px-20 py-10">
      <SectionHeader title="Список постов" />
      <div className="flex justify-between h-5/6">
        <div className="flex flex-col justify-between w-1/4">
          <ul className="flex flex-col gap-3">
            <li className="flex flex-col gap-3 border-t-2 border-[#5A5A5A] py-4 px-3">
              <h3>Пост №42</h3>
              <span className="text-neutral-400 text-sm font-medium">
                Регион
              </span>
            </li>
            <li className="flex flex-col gap-3 border-t-2 border-[#5A5A5A] py-4 px-3">
              <h3>Пост №54</h3>
              <span className="text-neutral-400 text-sm font-medium">
                Регион
              </span>
            </li>
          </ul>
          <ul className="flex gap-1 items-center">
            <li className="mr-4">Страница</li>
            <li>
              <button
                onClick={() => handleButtonClick(1)}
                className={`hover:text-[#15A1CF] py-1 px-3 rounded-full ${
                  selectedButton === 1 ? "bg-[#15A1CF] hover:text-white" : ""
                }`}
              >
                1
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick(2)}
                className={`hover:text-[#15A1CF] py-1 px-3 rounded-full ${
                  selectedButton === 2 ? "bg-[#15A1CF] hover:text-white" : ""
                }`}
              >
                2
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick(3)}
                className={`hover:text-[#15A1CF] py-1 px-3 rounded-full ${
                  selectedButton === 3 ? "bg-[#15A1CF] hover:text-white" : ""
                }`}
              >
                3
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick(4)}
                className={`hover:text-[#15A1CF] py-1 px-3 rounded-full ${
                  selectedButton === 4 ? "bg-[#15A1CF] hover:text-white" : ""
                }`}
              >
                4
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick(5)}
                className={`hover:text-[#15A1CF] py-1 px-3 rounded-full ${
                  selectedButton === 5 ? "bg-[#15A1CF] hover:text-white" : ""
                }`}
              >
                5
              </button>
            </li>
          </ul>
        </div>
        <div className="bg-[#343434] rounded-3xl p-5 border-2 w-2/3 border-transparent"></div>
      </div>
    </div>
  );
}

export default Posts;
