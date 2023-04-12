import { Tab } from './Tab';
import navbar from './navbar.module.scss';

export const Navbar = () => {
    return (
        <header className={ navbar.mainNavigation }>
            <nav>
                <ul>
                    <Tab url="/">Accueil</Tab>
                    <Tab url="/">Les CV digitaux</Tab>
                    <Tab url="/">Comment ça marche ?</Tab>
                    <li>
                        Notifs
                    </li>
                    <Tab url="/">Se connecter</Tab>
                </ul>
            </nav>
        </header>
    )
}