import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function ProductCard(props) {

    const [productIsUsed, setProductUsedState] = useState(false)

    const productUsedBtnHandler = () => {
        setProductUsedState(productIsUsed ? false : true);
    }

    return (

        <div>
            <h3>{props.productInfo.category}</h3>
            <div className={styles.productCard}>
                <img className={styles.productImg} src={props.productInfo.image} />

                <h5>{props.productInfo.name}</h5>

                <Link>Product Details</Link>

                <FaTrash />

                <button className={styles.useButton} onClick={productUsedBtnHandler}>{productIsUsed || props.checkAll ? 'Used' : 'Use Product'}</button>
            </div>

        </div>

    )
}


export default ProductCard;