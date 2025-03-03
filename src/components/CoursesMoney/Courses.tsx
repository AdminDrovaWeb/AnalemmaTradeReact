import './Courses.scss';
import CustomButton from "../Reused/CustomButton.tsx";
import SchemaImage from "../../assets/images/courses__schema.png";
import GreenIcon from "../../assets/images/money-top.png";
import { JSX } from 'react';

function Courses() {
    const coursesCards: {id: number, name: string, value: number, isGrowth: boolean}[] = [
        {
            id: 1,
            name: 'Курс рубля',
            value: 123,
            isGrowth: true,
        },
        {
            id: 2,
            name: 'Курс доллара',
            value: 86,
            isGrowth: false,
        },
        {
            id: 3,
            name: 'Курс юаней',
            value: 43,
            isGrowth: false,
        },
    ];

    const coursesCardsHTML: JSX.Element[] = coursesCards.map((item) => (
        <div key={item.id} className="courses__container">
            <div className="courses__card">
                <img src={SchemaImage} className="courses__image" alt=""/>
                <div className="courses__information">
                    <div className="courses__text">{item.name}</div>
                    <div>
                        <div className="courses__price">{item.value}</div>
                        <img src={GreenIcon} className="courses__icon" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    ));
    return (
        <>
            <div className="courses container">
                <div className="courses__header">
                    <div className="courses__titles">
                        <div className="courses__title">Курсы</div>
                        <div className="courses__subtitle">16:02:02 27.01.2022</div>
                    </div>
                    <CustomButton theme={'gold'} name={'Рассчитать стоимость'}/>
                </div>
                <div className="courses__body">
                    { coursesCardsHTML }
                </div>
            </div>
        </>
    )
}

export default Courses
