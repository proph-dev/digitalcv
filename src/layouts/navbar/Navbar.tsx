import { Tab } from './Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import navbar from './navbar.module.scss';

export const Navbar = () => {
    return (
        <header className={ navbar.mainNavigation }>
            <nav>
                <span>DigitalCV</span>
                <ul>
                    <Tab url="/">Accueil</Tab>
                    <Tab url="/">Les CV digitaux</Tab>
                    <Tab url="/">Comment ça marche ?</Tab>
                    <li>
                        <FontAwesomeIcon icon={ faBell } />
                    </li>
                    <Tab url="/">Se connecter</Tab>
                </ul>
            </nav>
        </header>
    )
}