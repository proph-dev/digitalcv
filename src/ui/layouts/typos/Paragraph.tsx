type ParagraphProps = {
  children: string;
  center?: boolean;
  white?: boolean;
  demi?: boolean;
};

export const Paragraph = ({ children, center, white, demi }: ParagraphProps) => {
  const titleStyle: React.CSSProperties = {
    textAlign: center ? 'center' : undefined,
    color: white ? 'white' : undefined,
    width: demi ? '50%' : undefined,
  };

  return (
    <p style={ titleStyle }>
      { children }
    </p>
  );
};