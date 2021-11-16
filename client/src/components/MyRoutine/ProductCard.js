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

    const deleteProductHandler = () => {
        if (!props.evening) {
            axios.delete(`/profile/deleteProductMorning/${props.email}/${props.name}`)
                .then(result => console.log('Deleting the Morning product....')
                )
                .catch(error => console.log(error))

        } else if (props.evening) {
            axios.delete(`/profile/deleteProductEvening/${props.email}/${props.name}`)
                .then(result => console.log('Deleting the Evening product....')
                )
                .catch(error => console.log(error))
        }
    }


    const getSkinConcerns = (string) => {

        let trimmedString = string.substring(
            string.indexOf('Skincare') + 18,
            string.lastIndexOf('Highlighted Ingredients') - 1
        )

        return trimmedString;
    }


    return (

        <div>
            <h3>{props.category}</h3>
            <div className={styles.productCard}>
                <img className={styles.productImg} src={props.image} />

                <h5>{props.name}</h5>
                <h5>Skincare Concerns</h5>
                <div dangerouslySetInnerHTML={{ __html: getSkinConcerns(props.description) }} />
                <p onClick={event => props.evening ?
                    props.openDetailsEvening(event, props.id) :
                    props.openDetailsMorning(event, props.id)}>
                    Product Details</p>

                <FaTrash className={styles.trashCan} onClick={deleteProductHandler} />

                <button className={styles.useButton} onClick={productUsedBtnHandler}>{productIsUsed || props.checkAll ? 'Used' : 'Use Product'}</button>
            </div>

        </div>

    )
}


export default ProductCard;