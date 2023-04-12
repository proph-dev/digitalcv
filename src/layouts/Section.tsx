import React, { ReactNode } from "react";

type LayoutComponentProps = {
  children: ReactNode;
};

export const Section = ({ children }: LayoutComponentProps) => {
  return (
    <section>
      {children}
    </section>
  );
};