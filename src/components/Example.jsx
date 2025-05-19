import { FOREGROUND } from "../helpers/colors"

const Example = () => {
    const products = [
        { name: 'number1', price: 4000 },
        { name: 'nember2', price: 5000 },
        { name: 'number3', price: 6000 }
    ]

    return (
        <div style={{ backgroundColor: FOREGROUND }}>
            {products.map((product, index) => (
                <p key={index}>{`${product.name} : ${product.price}`}</p>
            ))}
        </div>
    )
}

export default Example



