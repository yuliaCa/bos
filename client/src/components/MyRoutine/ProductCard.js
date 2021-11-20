import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

function ProductCard(props) {

    const [productIsUsed, setProductUsedState] = useState(false)

    // -----items for saving daily log - getting from the ProductCard----
    const [productUsedMorning, setProductUsedMorning] = useState(false);
    const [productName, setProductNameForLog] = useState();
    const [productCategory, setProductCategoryForLog] = useState();


    useEffect(
        function addUsedProdtoArray() {

            if (!props.evening && productIsUsed) {

                let objRoutineLog = {
                    productName: props.name,
                    category: props.category,
                    isUsed: productIsUsed
                }
                props.arrayProductsForMorningLog.push(objRoutineLog)
                console.log(props.arrayProductsForMorningLog)
            } else if (props.evening && productIsUsed) {
                let objRoutineLog = {
                    productName: props.name,
                    category: props.category,
                    isUsed: productIsUsed
                }
                props.arrayProductsForEveningLog.push(objRoutineLog)
                console.log(props.arrayProductsForEveningLog)
            }

        }, [productIsUsed])

    const productUsedBtnHandler = (event) => {
        setProductUsedState(true);

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

                <FaTrash className={styles.trashCan} onClick={event => props.deleteProductHandler(event, props.name, props.evening)} />

                <button className={styles.useButton} onClick={event => productUsedBtnHandler(event)}>{productIsUsed || props.checkAll ? 'Used' : 'Use Product'}</button>
            </div>

        </div>

    )
}


export default ProductCard;