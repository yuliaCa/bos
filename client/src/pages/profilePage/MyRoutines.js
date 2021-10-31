import styles from './MyRoutines.module.css';
import { useState } from 'react';
import Select from 'react-select';
import ProductCard from './MyRoutine/ProductCard';
import SearchInput from './MyRoutine/ProductAutocomplete/SearchInput';


function MyRoutines() {



    let productObj = {
        category: 'Cleanser',
        name: 'testProductName',
        description: 'test product description',
        image: 'https://images.unsplash.com/photo-1621102828690-70cc661c92b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW5zZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }

    const [checkedAll, setCheckedAll] = useState(false);

    const checkAllHandler = () => {
        setCheckedAll(checkedAll ? false : true)
    }

    const categoryOptions = [
        { label: "Cleanser", value: "cleanser" },
        { label: "Moisturizer", value: "moisturizer" },
        { label: "Treatment", value: "treatment" },
        { label: "Mask", value: "mask" },
        { label: "Eyecare", value: "eyecare" },
        { label: "Sunscreen", value: "sunscreen" }

    ]

    return (
        <div>
            <h1 className={styles.heading}>Morning Routine  </h1>

            <div className={styles.userInput}>
                <Select options={categoryOptions} />

                <SearchInput />

                <button>Add Product</button>
            </div>

            <div className={styles.selectAll}>
                <label className={styles.selectAllLabel}> Select All
                <input className={styles.selectAllInput} type="checkbox" value={checkedAll} onChange={checkAllHandler} />
                </label>
            </div>

            <div className={styles.productsGrid}>
                <ProductCard productInfo={productObj} checkAll={checkedAll} />
                <ProductCard productInfo={productObj} checkAll={checkedAll} />
                <ProductCard productInfo={productObj} checkAll={checkedAll} />
            </div>
            <button className={styles.saveButton}>Save</button>
        </div>
    )
}

export default MyRoutines;