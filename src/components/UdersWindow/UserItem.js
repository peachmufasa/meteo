function UserItem() {
  return (
    <div className="flex justify-between items-center border-t-2 border-[#5A5A5A] py-5 px-5">
      <div className="flex flex-col gap-3">
        <h3>Фамилия Имя Отчество</h3>
        <span className="text-neutral-400 text-sm font-medium">Должность</span>
        <span className="text-neutral-400 text-sm font-medium">Роль</span>
      </div>
      <div className="flex flex-col gap-5">
        <button className="text-neutral-400 text-sm font-medium hover:text-[#15A1CF] transition duration-200">
          Редактировать
        </button>
        <button className="text-neutral-400 text-sm font-medium hover:text-[#15A1CF] transition duration-200">
          Удалить
        </button>
      </div>
    </div>
  );
}

export default UserItem;
