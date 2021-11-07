

const ProductDetails = (props) => {



    return (
        <div>
            <a href='#' onClick={props.evening ? props.closeDetailsEvening : props.closeDetailsMorning}>Back To Routine</a>


        </div>
    )
}

export default ProductDetails;