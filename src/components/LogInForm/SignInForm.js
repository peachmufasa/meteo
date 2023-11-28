import React, { useState } from "react";

function SignInForm({ onSignIn }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
    onSignIn();
  }

  if (!isClicked) {
    return (
      <div className="flex flex-col min-h-screen justify-center">
        <div className="flex flex-col px-7 py-16 items-center m-auto w-[388px] h-[586px]">
          <img src="/logo.svg" alt="Logo" className="w-[90px] h-[90px] mb-10" />
          <p className="text-white text-2xl mb-14">Авторизация</p>
          <form className="flex flex-col items-center min-w-full">
            <input
              type="text"
              placeholder="Логин"
              className="mb-7 input-form"
            ></input>
            <input
              type="password"
              placeholder="Пароль"
              className="mb-14 input-form"
            ></input>
            <button onClick={handleClick} className="w-44 btn">
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInForm;
