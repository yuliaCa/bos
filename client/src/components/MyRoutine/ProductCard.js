import styles from './ProductCard.module.css';
import { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';


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

            } else if (props.evening && productIsUsed) {
                let objRoutineLog = {
                    productName: props.name,
                    category: props.category,
                    isUsed: productIsUsed
                }
                props.arrayProductsForEveningLog.push(objRoutineLog)

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

                <h4>{props.name}</h4>
                <h5 className={styles.skinConcerns}>Skincare Concerns</h5>
                <div className={styles.concernsList} dangerouslySetInnerHTML={{ __html: getSkinConcerns(props.description) }} />
                <div className={styles.detailsAndDelete}>
                    <img
                        onClick={event => props.deleteProductHandler(event, props.name, props.evening)}
                        className={styles.trashCan}
                        src={"https://s3-us-west-2.amazonaws.com/bos-skincare/icons/delete.svg"}
                        alt="Trash Icon"
                    />
                    <p onClick={event => props.evening ?
                        props.openDetailsEvening(event, props.id) :
                        props.openDetailsMorning(event, props.id)}>
                        Product Details</p>
                </div>




                <button className={productIsUsed ? styles.usedButton : styles.useButton} onClick={event => productUsedBtnHandler(event)}>{productIsUsed ? 'USED' : 'USE PRODUCT'}</button>
            </div>

        </div>

    )
}


export default ProductCard;