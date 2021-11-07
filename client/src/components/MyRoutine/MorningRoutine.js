import styles from '../../pages/profilePage/MyRoutines.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import ProductCard from '../../components/MyRoutine/ProductCard';
import SearchInput from '../../components/MyRoutine/ProductAutocomplete/SearchInput';

const MorningRoutine = (props) => {

    const categoryOptions = [
        { label: "Cleanser", value: "cleanser" },
        { label: "Moisturizer", value: "moisturizer" },
        { label: "Treatment", value: "treatment" },
        { label: "Mask", value: "mask" },
        { label: "Eyecare", value: "eyecare" },
        { label: "Sunscreen", value: "sunscreen" }
    ]



    return (

        <div className={styles.morningRoutine}>
            <h1 className={styles.heading}>Morning Routine  </h1>

            <form className={styles.userInput} >
                <Select options={categoryOptions} />

                <SearchInput setProduct={props.setProduct} />

                <button onClick={(event) => props.ProductSubmitHandler(event)}>Add Product</button>
            </form>

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
                        category={eachProduct.category}
                        name={eachProduct.productName}
                        description={eachProduct.description}
                        suggestedUsage={eachProduct.suggestedUsage}
                        checkAll={props.checkedAll}
                        detailsOrRoutineHandler={props.detailsOrRoutineHandler}
                    />
                ))}
            </div>
            <button className={styles.saveButton}>Save</button>
        </div>

    )
}

export default MorningRoutine;