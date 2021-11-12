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
    const saveDailyLog = (email, objRoutineLog) => {
        axios.post(`/dailyroutine/${email}`, `"objRoutineLog":${objRoutineLog}`)
            .then(results => {
                console.log(objRoutineLog);
                console.log('SAVING THE LOG FOR TODAY')
            })
            .catch(error => console.log(error))
    }

    return (

        <div className={styles.morningRoutine}>
            <h1 className={styles.heading}>Morning Routine  </h1>

            <form className={styles.userInput} onSubmit={(event) => props.ProductSubmitHandler(event)}>
                <Select options={categoryOptions} />

                <SearchInput setProduct={props.setProduct} />

                <button >Add Product</button>
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
                        openDetailsMorning={props.openDetailsMorning}
                        evening={props.evening}
                        setTheProductName={props.setTheProductName}
                        email={props.email}
                    />
                ))}
            </div>
            <button className={styles.saveButton} onClick={saveDailyLog}>Save</button>
        </div>

    )
}

export default MorningRoutine;