import { NavLink } from 'react-router-dom';

type TabProps = {
    children: string;
    url: string;
};

export const Tab = ({ children, url }: TabProps) => {
  return (
    <li>
        <NavLink to={url}>{ children }</NavLink>
    </li>
  );
};