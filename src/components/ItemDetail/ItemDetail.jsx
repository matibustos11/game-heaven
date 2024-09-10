import ItemCounter from "../ItemCounter/ItemCounter";

const ItemDetail = ({ title, img, price, category, description }) => {

    return (
        <section className="item-detail">
            <picture className="item-detail_picture">
                <img className="item-detail_picture-img item_picture-img-1" src= {`../src/assets${img?.front}`} alt= {`${title} - Frente Caja`} />
                <img className="item-detail_picture-img item_picture-img-2" src= {`../src/assets${img?.back}`} alt= {`${title} - Dorso Caja`} />
            </picture>
            <article className="item-detail_info">
                <h3 className="item-detail_info-title"> {category} </h3>
                <h4 className="item-detail_info-item"> {title} </h4>
                <p className="item-detail_info-description"> {description}</p>
                <p className="item-detail_info-price"> $ {price} .- </p>
            </article>
            <div>
                <ItemCounter initial={1} stock={10}/>
            </div>
        </section>

    )
};

export default ItemDetail;