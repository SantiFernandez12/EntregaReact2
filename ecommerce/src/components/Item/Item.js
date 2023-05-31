import './Item.css'
const Item = ({id, name, img, price, stock}) => {

    return (
        <article className="card">
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img className='img' src={img} alt={name}/>
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
                <footer>
                    <button>Ver detalle</button>
                </footer>
            </section>
        </article>
    )
}

export default Item