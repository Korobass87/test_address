import React from "react";
import "./logo.scss";

import { LogoKey } from "../../data/svg";

export const Logo = () => {
  return (
    <div className={"logo"}>
      <LogoKey />
      <h1 className={"logo-header"}>Wrench CRM</h1>
    </div>
  );
};
