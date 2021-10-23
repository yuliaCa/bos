import styles from './MyRoutines.module.css';
import { useState, useEffect } from 'react';

import ProductCard from './MyRoutine/ProductCard';
import SearchInput from './ProductAutocomplete/SearchInput';

function MyRoutines() {


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
                <select value="category" >
                    <option>Cleanser</option>
                    <option>Moisturizer</option>
                    <option>Treatments</option>
                    <option>Masks</option>
                    <option>Eyecare</option>
                    <option>Sunscreen</option>
                </select>

                <SearchInput />

                <button>Add Product</button>
            </div>

            <div className={styles.selectAll}>
                <label className={styles.selectAllLabel}> Select All
                <input className={styles.selectAllInput} type="radio" />
                </label>
            </div>

            <div className={styles.productsGrid}>
                <ProductCard productInfo={productObj} />
                <ProductCard productInfo={productObj} />
                <ProductCard productInfo={productObj} />
            </div>
            <button>Save</button>
        </div>
    )
}

export default MyRoutines;