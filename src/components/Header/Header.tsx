import './Header.scss'
import LogoIcon from '../../assets/svg/logo.svg';
import PhoneIcon from '../../assets/svg/s-tel.svg';
import { Link } from "react-router-dom";

function Header() {
    const myObject =[
        {
            name: 'Главная',
            route: '/',
        },
        {
            name: 'Каталог',
            route: '/catalog',
        },
        {
            name: 'Прайс-лист',
            route: '/',
        },
        {
            name: 'Сдать золото',
            route: '/',
        },
        {
            name: 'Контакты',
            route: '/',
        }
    ];
    return (
        <>
            <div className="header">
                <div className="header__wrapper container">
                    <img className="header__logo" src={LogoIcon as string} alt=""/>
                    <div className="header__container">
                        <div className="header__navigation">
                            {myObject.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.route}
                                    className="header__src"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="header__link">
                            <img src={PhoneIcon as string} className="header__icon" alt=""/>
                            <a href="tel:79872846800" className="header__call">+7 (495) 011-11-21</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
