import { Link } from "react-router-dom";

const Item = ({ title, img, price, category, dues, id, tag }) => {

    return (
        <article className="item">
            <Link to = {`/detalle/${id}`}>
                <picture className="item_picture">
                    <span className="item_picture-pill"> {tag} </span>
                    <img className="item_picture-img item_picture-img-1" src= {`../src/assets${img.front}`} alt= {`${title} - Frente Caja`} />
                    <img className="item_picture-img item_picture-img-2" src= {`../src/assets${img.back}`} alt= {`${title} - Dorso Caja`} />
                </picture>
                <div className="item_info">
                    <h3 className="item_info-title"> {category} </h3>
                    <h4 className="item_info-item"> {title} </h4>
                    <p className="item_info-price"> $ {price} .- </p>
                    <p className="item_info-dues"> {dues} CUOTAS SIN INTERES </p>
                </div>
            </Link>
        
        </article>
    )
};

export default Item;