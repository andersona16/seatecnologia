import React, { FC } from "react";

interface IShortlyRoute {
  children: React.ReactNode;
}

export const ShortlyRoute: FC<IShortlyRoute> = ({ children }) => {
  return children;
};
