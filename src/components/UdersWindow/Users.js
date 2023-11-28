import React from "react";
import UserItem from "./UserItem";
import SectionHeader from "../CommonComponents/SectionHeader";

function Users() {
  return (
    <div className="bg-[#1C1C1C] rounded-3xl border-transparent m-20 w-[1400px] px-20 py-10">
      <SectionHeader title="Пользователи" />
      <div className="flex flex-col gap-3">
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    </div>
  );
}

export default Users;
