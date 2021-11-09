import styles from './ProductDetails.module.css';

const ProductDetails = (props) => {



    return (
        <div className={styles.productDetails}>
            <a href='#' onClick={props.evening ? props.closeDetailsEvening : props.closeDetailsMorning}>Back To Routine</a>


        </div>
    )
}

export default ProductDetails;