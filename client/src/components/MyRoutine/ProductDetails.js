import styles from './ProductDetails.module.css';
import axios from 'axios';

const ProductDetails = (props) => {

    // axios.get(`/products/${props.theProductName}`)
    //     .then(result => {
    //         console.log(result)
    //     })
    //     .catch(error => console.log(error))

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
            <p onClick={props.evening ? props.closeDetailsEvening : props.closeDetailsMorning}>Back To Routine</p>

            <h3>{props.theProduct.productName}</h3>
            <div>Category</div>
            <img src={props.theProduct.images[0]}></img>
            <h4>Description</h4>
            <div dangerouslySetInnerHTML={{ __html: getDescription(props.theProduct.description) }} />


            <div dangerouslySetInnerHTML={{ __html: props.theProduct.suggestedUsage }} />

            <button>Delete</button>

        </div>
    )
}

export default ProductDetails;