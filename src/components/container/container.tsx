import React, { FC } from "react";

import "./container.scss";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Container: FC<Props> = ({ children, title }) => {
  return (
    <div className={"container"}>
      {title && <h2 className={"container-header"}>{title}</h2>}

      {children}
    </div>
  );
};
