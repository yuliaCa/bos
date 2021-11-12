import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

function ProductCard(props) {

    const [productIsUsed, setProductUsedState] = useState(false)

    const productUsedBtnHandler = () => {
        setProductUsedState(productIsUsed ? false : true);
    }

    const MorningProductDeleteHandler = (event) => {
        
        axios.put(`/profile/deleteProductMorning/${props.email}/${props.name}`)
            .then(results => {
                console.log('Deleted!')
            })
            .catch(error => console.log(error))
    }

    const EveningProductDeleteHandler = (event) => {
        
        axios.put(`/profile/deleteProductEvening/${props.email}/${props.name}`)
            .then(results => {
                console.log('Deleted!')
            })
            .catch(error => console.log(error))
    }

    return (

        <div>
            <h3>{props.category}</h3>
            <div className={styles.productCard}>
                <img className={styles.productImg} src={props.image} />

                <h5>{props.name}</h5>

                <p>{props.suggestedUsage}</p>
                <a href='#' onClick={props.evening ? props.openDetailsEvening : props.openDetailsMorning}>Product Details</a>

                <FaTrash className={styles.trashCan} />

                <button className={styles.useButton} onClick={productUsedBtnHandler}>{productIsUsed || props.checkAll ? 'Used' : 'Use Product'}</button>
            </div>

        </div>

    )
}


export default ProductCard;