import oneImage from './images/1.jpeg';
import twoImage from './images/2.jpeg';
import threeImage from './images/3.jpeg';
import fourImage from './images/4.jpeg';
import bracelet1Image from './images/bracelet1.jpg';
import bracelet2Image from './images/bracelet2.jpg';
import chain1Image from './images/chain1.webp';
import chain2Image from './images/chain2.webp';
import earrings1Image from './images/earrings1.webp';
import earrings2Image from './images/earrings2.webp';
import earrings3Image from './images/earrings3.webp';
import earrings4Image from './images/earrings4.webp';

import './List.scss';
import CustomButton from "../../Reused/CustomButton.tsx";

function List() {
    interface IListCircle {
        name: string,
        oldPrice: number,
        newPrice: number,
        discount: number,
        image: string,
        quantity: number,
        type: string,
        kind: string,
        id?: number,
    }

    const listCircle: IListCircle[]  = [
        {
            name: 'Кольцо 70108800 золото',
            oldPrice: 35530,
            newPrice: 17765,
            discount: 50,
            image: oneImage,
            quantity: 5,
            type: 'ring',
            kind: 'gold',
        },
        {
            name: 'Кольцо дорожка 600268А.1 золото',
            oldPrice: 27745,
            newPrice: 19422,
            discount: 30,
            image: twoImage,
            quantity: 15,
            type: 'ring',
            kind: 'gold',
        },
        {
            name: 'Кольцо дорожка 019174 золото Дорожка',
            oldPrice: 27435,
            newPrice: 19205,
            discount: 30,
            image: threeImage,
            quantity: 3,
            type: 'ring',
            kind: 'gold',
        },
        {
            name: 'Кольцо К.20-06228Н.20.5.бцФ.з585 Кольцо золото',
            oldPrice: 40300,
            newPrice: 28210,
            discount: 30,
            image: fourImage,
            quantity: 9,
            type: 'ring',
            kind: 'gold',
        },
        {
            name: 'Браслеты, белое золото 585 проба, размер 18',
            oldPrice: 17982,
            newPrice: 19980,
            discount: 10,
            image: bracelet1Image,
            quantity: 23,
            type: 'bracelet',
            kind: 'white-gold',
        },
        {
            name: 'Браслеты, красное золото 585 проба, размер 19',
            oldPrice: 32382,
            newPrice: 35980,
            discount: 10,
            image: bracelet2Image,
            quantity: 4,
            type: 'bracelet',
            kind: 'red-gold',
        },
        {
            name: 'Цепи, красное золото 585 проба, размер 40',
            oldPrice: 6786,
            newPrice: 7540,
            discount: 10,
            image: chain1Image,
            quantity: 32,
            type: 'chain',
            kind: 'red-gold',
        },
        {
            name: 'Цепи, красное золото 585 проба, размер 55',
            oldPrice: 31356,
            newPrice: 34840,
            discount: 10,
            image: chain2Image,
            quantity: 9,
            type: 'chain',
            kind: 'gold',
        },
        {
            name: 'Серьги, красное золото 585 проба',
            oldPrice: 44406,
            newPrice: 49340,
            discount: 10,
            image: earrings1Image,
            quantity: 9,
            type: 'earrings',
            kind: 'red-gold',
        },
        {
            name: 'Серьги, белое золото 585 проба',
            oldPrice: 45000,
            newPrice: 50000,
            discount: 10,
            image: earrings2Image,
            quantity: 19,
            type: 'earrings',
            kind: 'white-gold',
        },
        {
            name: 'Серьги, красное золото 585 проба',
            oldPrice: 21760,
            newPrice: 32000,
            discount: 32,
            image: earrings3Image,
            quantity: 29,
            type: 'earrings',
            kind: 'red-gold',
        },
        {
            name: 'Серьги, красное золото 583 проба',
            oldPrice: 62217,
            newPrice: 69130,
            discount: 10,
            image: earrings4Image,
            quantity: 14,
            type: 'earrings',
            kind: 'red-gold',
        }
    ].map((item, index) => ({ ...item, id: index + 1 }));
    return (
        <>
            <div className="list-items">
                {listCircle.map((item) => (
                    <div className="list-items__card" key={item.id}>
                        {/*{ item.id && (<p>{item.id}</p>)}*/}
                        <div className="list-items__content">
                            <img className="list-items__image" src={item.image} alt={item.name}/>
                            <div className="list-items__like">
                            </div>
                            <div className="list-items__prices">
                                <div className="list-items__new-price">{item.newPrice} Р.</div>
                                <div className="list-items__old-price">{item.oldPrice} Р.</div>
                                <div className="list-items__discount">-{item.discount}%</div>
                            </div>
                            <div className="list-items__name">{item.name}</div>
                            <div className="list-items__quantity">Количество {item.quantity} шт.</div>
                        </div>
                        <div className="list-items__button">
                            <CustomButton theme="dark" name="Добавить в корзину"/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default List
