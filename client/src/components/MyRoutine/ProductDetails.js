import styles from './ProductDetails.module.css';
import axios from 'axios';

const ProductDetails = (props) => {

    axios.get(`/products/${props.theProductName}`)
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log(error))

    return (
        <div className={styles.productDetails}>
            <a href='#' onClick={props.evening ? props.closeDetailsEvening : props.closeDetailsMorning}>Back To Routine</a>


        </div>
    )
}

export default ProductDetails;