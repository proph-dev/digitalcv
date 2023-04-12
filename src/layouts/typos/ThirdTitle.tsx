type ThirdTitleProps = {
  children: string;
  center?: boolean;
  white?: boolean;
};

export const ThirdTitle = ({ children, center, white }: ThirdTitleProps) => {
  const titleStyle: React.CSSProperties = {
    textAlign: center ? 'center' : undefined,
    color: white ? 'white' : undefined,
  };

  return (
    <h3 style={ titleStyle }>
      { children }
    </h3>
  );
};