import styles from './MyRoutines.module.css';
import { useState, useEffect } from 'react';
import { axios } from 'axios';
import ProductCard from './MyRoutine/ProductCard';

function MyRoutines() {

    const [chosenCategory, setCategory] = useState('Category')
    const categoryHandler = (event) => {
        setCategory(event.target.value);
    }
    const [chosenProduct, setProduct] = useState("")
    const productHandler = (event) => {
        setProduct(event.target.value)
    }
    const [listProducts, setlistProducts] = useState([]);
    useEffect(() => {
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://sephora.p.rapidapi.com/products/search',
            params: { q: `${chosenProduct}` },
            headers: {
                'x-rapidapi-host': 'sephora.p.rapidapi.com',
                'x-rapidapi-key': '89632d8bb4mshf551a65abbd5eb0p1e8542jsn5fc07151d88c'
            }
        };

        axios.request(options).then(function (response) {

            setlistProducts(response.data.products)
            console.log(listProducts)

        }).catch(function (error) {
            console.error(error);
        });

    })

    let productObj = {
        category: 'Cleanser',
        name: 'testProductName',
        description: 'test product description',
        image: 'https://images.unsplash.com/photo-1621102828690-70cc661c92b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW5zZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }

    return (
        <div>
            <h1 className={styles.heading}>Morning Routine</h1>

            <div className={styles.userInput}>
                <select value="category" onChange={categoryHandler}>
                    <option>Cleanser</option>
                    <option>Moisturizer</option>
                    <option>Treatments</option>
                    <option>Masks</option>
                    <option>Eyecare</option>
                    <option>Sunscreen</option>
                </select>
                <input type="text" placeholder="Product Name" onChange={productHandler}></input>
                or
                <select value="select product" >
                    <option>api product 1</option>
                    <option>api product 2</option>
                    <option>api product 3</option>
                </select>
                <button>Add Product</button>
            </div>
            <div>
                <ul>

                </ul>
            </div>
            <ProductCard productInfo={productObj} />

        </div>
    )
}

export default MyRoutines;