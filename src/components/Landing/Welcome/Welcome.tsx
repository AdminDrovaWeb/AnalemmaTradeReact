import CustomButton from "../../Reused/CustomButton.tsx";
import './Welcome.scss';

function LandingWelcome() {
    return (
        <>
            <div className="welcome">
                <div className="welcome__wrapper container">
                    <div className="welcome__information">
                        <div className="welcome__title">Скупка золота в Москве и
                            Московской области</div>
                        <div className="welcome__subtitle">Мы осуществляем оптовую
                            скупку золота и драгоценностей. Уже много лет мы
                            сотрудничаем с ломбардами, компаниями и частными лицами.
                        </div>
                        <CustomButton theme={'gold'} name={'Сдать золото'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingWelcome
