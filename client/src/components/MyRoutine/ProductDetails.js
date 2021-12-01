// import styles from './ProductDetails.module.css';
import styles from '../../pages/profilePage/MyRoutines.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

const ProductDetails = (props) => {

    const getDescription = (string) => {
        let descriptionClean = string.substring(
            string.indexOf('What') + 17,
            string.lastIndexOf('Skin Type') - 11
        )
        let highlightedIngredients = string.substring(
            string.indexOf('Highlighted') + 23,
            string.lastIndexOf('What Else') - 7
        )
        return descriptionClean + highlightedIngredients;
    }



    return (
        <div className={styles.productDetails}>
            <FaArrowLeft onClick={props.evening ? props.closeDetailsEvening : props.closeDetailsMorning}>Back To Routine</FaArrowLeft>

            <h3 >{props.theProduct.productName}</h3>
            {/* <div>Category</div> */}
            <img src={props.theProduct.images[0]}></img>
            <h4 className={styles.descriptionH4}>Description</h4>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: getDescription(props.theProduct.description) }} />


            <div className={styles.suggestedUsage} dangerouslySetInnerHTML={{ __html: props.theProduct.suggestedUsage }} />

            <button className={styles.saveButton} onClick={event => props.deleteProductHandler(event, props.theProduct.productName, props.evening)}>Delete</button>

        </div>
    )
}

export default ProductDetails;