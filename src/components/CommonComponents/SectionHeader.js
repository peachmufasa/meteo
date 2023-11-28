import { useState } from "react";

function SectionHeader({ title }) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="flex justify-between items-center mb-12">
      <h2 className="text-[32px] font-bold tracking-[3.2px]">{title}</h2>
      <form>
        <input
          type="text"
          placeholder="Поиск"
          className="input-form w-96"
        ></input>
      </form>
      <ul className="flex gap-8">
        <li>
          <button
            onClick={() => handleButtonClick(1)}
            className={`filter-button ${
              selectedButton === 1 ? "bg-[#15A1CF] hover:text-white" : ""
            }`}
          >
            Фильтр 1
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick(2)}
            className={`filter-button ${
              selectedButton === 2 ? "bg-[#15A1CF] hover:text-white" : ""
            }`}
          >
            Фильтр 2
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick(3)}
            className={`filter-button ${
              selectedButton === 3 ? "bg-[#15A1CF] hover:text-white" : ""
            }`}
          >
            Фильтр 3
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SectionHeader;
