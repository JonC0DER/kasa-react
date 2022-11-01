import logo from '../../../assets/svg/Logo_kasa.svg';
import NavBar from './navBar';

function Header() {
    return (
        <header>
            <img src={logo} alt="logo kasa" />
            <NavBar /> 
        </header>
    );   
}

export default Header;