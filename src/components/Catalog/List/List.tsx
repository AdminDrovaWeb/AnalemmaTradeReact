import oneImage from './images/1.jpeg';
import twoImage from './images/2.jpeg';
import threeImage from './images/3.jpeg';
import fourImage from './images/4.jpeg';

function List() {
    interface IListCircle {
        name: string,
        oldPrice: number,
        newPrice: number,
        discount: number,
        image: string,
        id?: number,
    }

    const listCircle: IListCircle[]  = [
        {
            name: 'Кольцо 70108800 золото',
            oldPrice: 35530,
            newPrice: 17765,
            discount: 50,
            image: oneImage,
        },
        {
            name: 'Кольцо дорожка 600268А.1 золото',
            oldPrice: 27745,
            newPrice: 19422,
            discount: 30,
            image: twoImage,
        },
        {
            name: 'Кольцо дорожка 019174 золото Дорожка',
            oldPrice: 27435,
            newPrice: 19205,
            discount: 30,
            image: threeImage,
        },
        {
            name: 'Кольцо К.20-06228Н.20.5.бцФ.з585 Кольцо золото',
            oldPrice: 40300,
            newPrice: 28210,
            discount: 30,
            image: fourImage,
        }
    ].map((item, index) => ({ ...item, id: index + 1 }));
    return (
        <>
            <div className="list-items">
                {listCircle.map((item) => (
                    <div key={item.id}>
                        { item.id && (<p>{item.id}</p>)}
                        <h2>{item.name}</h2>
                        <p>Старая цена: {item.oldPrice}</p>
                        <p>Новая цена: {item.newPrice}</p>
                        <p>Скидка: {item.discount}%</p>
                        <img src={item.image} alt={item.name} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default List
