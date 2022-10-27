import React from "react";
import { Logo } from "../logo";
import "./header.scss";
import { User } from "../user";

export const Header = () => {
  return (
    <div className={"header"}>
      <Logo />
      <User />
    </div>
  );
};
