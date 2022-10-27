import React from "react";
import { UserLogo } from "../../data/svg";
import "./user.scss";

export const User = () => {
  return (
    <div className={"user"}>
      <UserLogo />
      <h2 className={"username"}>Имя Фамилия</h2>
    </div>
  );
};
