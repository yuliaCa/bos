import styles from '../../pages/profilePage/MyRoutines.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import ProductCard from '../../components/MyRoutine/ProductCard';
import SearchInput from '../../components/MyRoutine/ProductAutocomplete/SearchInput';

const EveningRoutine = (props) => {

    const categoryOptions = [
        { label: "Cleanser", value: "cleanser" },
        { label: "Moisturizer", value: "moisturizer" },
        { label: "Treatment", value: "treatment" },
        { label: "Mask", value: "mask" },
        { label: "Eyecare", value: "eyecare" },
        { label: "Sunscreen", value: "sunscreen" }
    ]

    return (
        <div className={styles.eveningRoutine}>
            <h1 className={styles.heading}>Evening Routine  </h1>

            <div className={styles.userInput}>
                <Select options={categoryOptions} />

                <SearchInput setProduct={props.setProduct} />

                <button onClick={props.ProductSubmitHandler}>Add Product</button>
            </div>

            <div className={styles.selectAll}>
                <label className={styles.selectAllLabel}> Select All
                    <input className={styles.selectAllInput} type="checkbox" value={props.checkedAll} onChange={props.checkAllHandler} />
                </label>
            </div>

            <div className={styles.productsGrid}>
                {props.loadedProducts.map((eachProduct) => (
                    <ProductCard
                        key={eachProduct._id}
                        id={eachProduct._id}
                        image={eachProduct.images}
                        category={eachProduct.productCategory}
                        name={eachProduct.productName}
                        description={eachProduct.productDescription}
                        suggestedUsage={eachProduct.suggestedUsage}
                        checkAll={props.checkedAll}
                        openDetailsEvening={props.openDetailsEvening}
                        evening={props.evening}
                    />
                ))}
            </div>
            <button className={styles.saveButton}>Save</button>
        </div>

    )
}

export default EveningRoutine;