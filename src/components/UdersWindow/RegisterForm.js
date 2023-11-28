function RegisterForm() {
  return (
    <div className="bg-[#1C1C1C] rounded-3xl border-transparent m-auto w-[1200px] px-20 py-14 flex flex-col items-center">
      <h2 className="text-[32px] font-bold tracking-[3.2px] w-full text-center mb-20">
        Создание профиля
      </h2>
      <form className="w-full flex flex-col gap-28 items-center">
        <ul className="flex flex-wrap justify-around">
          <li className="w-1/3 mr-20 mb-10 flex flex-col gap-4">
            <span className="text-neutral-400 text-lg font-medium px-4">
              Имя
            </span>
            <input className="input-form" type="text"></input>
          </li>
          <li className="w-1/3 mb-10 flex flex-col gap-4">
            <span className="text-neutral-400 text-lg font-medium px-4">
              Фамилия
            </span>
            <input className="input-form" type="text"></input>
          </li>
          <li className="w-1/3 mr-20 mb10 flex flex-col gap-4">
            <span className="text-neutral-400 text-lg font-medium px-4">
              Логин
            </span>
            <input className="input-form" type="text"></input>
          </li>
          <li className="w-1/3 mb-10 flex flex-col gap-4">
            <span className="text-neutral-400 text-lg font-medium px-4">
              Пароль
            </span>
            <input className="input-form" type="password"></input>
          </li>
          <li className="w-1/3 flex flex-col gap-4 mr-20">
            <span className="text-neutral-400 text-lg font-medium px-4">
              Телефон
            </span>
            <input className="input-form" type="tel"></input>
          </li>
          <li className="flex flex-col w-1/3 gap-4">
            <span className="text-neutral-400 text-lg font-medium px-4">
              Роль
            </span>
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-center">
                <input
                  className="w-[30px] h-[30px]"
                  type="radio"
                  id="admin-choice"
                  value="admin"
                  name="role"
                ></input>
                <label className="text-neutral-400" for="admin-choice">
                  Админ
                </label>
              </div>
              <div className="flex gap-4 items-center">
                <input
                  className="w-[30px] h-[30px]"
                  type="radio"
                  id="sender-choice"
                  value="sender"
                  name="role"
                ></input>
                <label className="text-neutral-400" for="sender-choice">
                  Отправитель
                </label>
              </div>
              <div className="flex gap-4 items-center">
                <input
                  className="w-[30px] h-[30px]"
                  type="radio"
                  id="gidro-choice"
                  value="gidro"
                  name="role"
                ></input>
                <label className="text-neutral-400" for="gidro-choice">
                  Гидролог
                </label>
              </div>
            </div>
          </li>
        </ul>
        <div className="flex gap-32">
          <button className="text-[#DA2727] text-2xl font-normal">
            Отменить
          </button>
          <button className="text-[#1A96BE] text-2xl font-normal border-transparent rounded-3xl border-2 border-transparent bg-zinc-700/50 px-7 py-4 hover:border-[#1A96BE]">
            Подтвердить
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
