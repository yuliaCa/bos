import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

function ProductCard(props) {


    return (

        <div>
            <h3>{props.productInfo.category}</h3>
            <img className={styles.productImg} src={props.productInfo.image} />
            <h5>{props.productInfo.name}</h5>
            <Link>Product Details</Link>
            <FaTrash />
        </div>

    )
}


export default ProductCard;