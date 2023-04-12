type SecondTitleProps = {
  children: string;
  center?: boolean;
  white?: boolean;
};

export const SecondTitle = ({ children, center, white }: SecondTitleProps) => {
  const titleStyle: React.CSSProperties = {
    textAlign: center ? 'center' : undefined,
    color: white ? 'white' : undefined,
  };

  return (
    <h2 style={ titleStyle }>
      { children }
    </h2>
  );
};