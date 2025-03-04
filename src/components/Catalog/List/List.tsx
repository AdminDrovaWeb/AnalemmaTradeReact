import oneImage from './images/1.jpeg';
import twoImage from './images/2.jpeg';
import threeImage from './images/3.jpeg';
import fourImage from './images/4.jpeg';
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
        },
        {
            name: 'Кольцо дорожка 600268А.1 золото',
            oldPrice: 27745,
            newPrice: 19422,
            discount: 30,
            image: twoImage,
            quantity: 15,
        },
        {
            name: 'Кольцо дорожка 019174 золото Дорожка',
            oldPrice: 27435,
            newPrice: 19205,
            discount: 30,
            image: threeImage,
            quantity: 3,
        },
        {
            name: 'Кольцо К.20-06228Н.20.5.бцФ.з585 Кольцо золото',
            oldPrice: 40300,
            newPrice: 28210,
            discount: 30,
            image: fourImage,
            quantity: 9,
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
