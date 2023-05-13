type MainTitleProps = {
  children: string;
  center?: boolean;
  white?: boolean;
};

export const MainTitle = ({ children, center, white }: MainTitleProps) => {
  const titleStyle: React.CSSProperties = {
    textAlign: center ? 'center' : undefined,
    color: white ? 'white' : undefined,
  };

  return (
    <h1 style={ titleStyle }>
      { children }
    </h1>
  );
};