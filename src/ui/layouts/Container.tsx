import { ReactNode } from "react";

type LayoutComponentProps = {
  children: ReactNode;
};

export const Container = ({ children }: LayoutComponentProps) => {
  return (
    <div className="container-page">
      {children}
    </div>
  );
};