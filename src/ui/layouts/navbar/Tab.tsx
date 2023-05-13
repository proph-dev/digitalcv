import { NavLink } from 'react-router-dom';

type TabProps = {
    children: string;
    url: string;
    className?: string;
};

export const Tab = ({ children, url, className }: TabProps) => {
  return (
    <li>
        <NavLink to={url} className={ className }>{ children }</NavLink>
    </li>
  );
};