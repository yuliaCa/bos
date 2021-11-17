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


    const saveDailyLog = (email, objRoutineLog) => {
        axios.post(`/dailyroutine/${email}`, `"objRoutineLog":${objRoutineLog}`)
            .then(results => {
                console.log(objRoutineLog);
                console.log('I AM GETTING POSTED YEA')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className={styles.eveningRoutine}>
            <form className={styles.userInput} onSubmit={(event) => props.ProductSubmitHandler(event)}>
                <Select options={categoryOptions} />

                <SearchInput setProduct={props.setProduct} setInput={props.setInput} input={props.input} />

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
                        category={eachProduct.productCategory}
                        name={eachProduct.productName}
                        description={eachProduct.description}
                        suggestedUsage={eachProduct.suggestedUsage}
                        checkAll={props.checkedAll}
                        openDetailsEvening={props.openDetailsEvening}
                        evening={props.evening}
                        setTheProductName={props.setTheProductName}
                        email={props.email}
                    />
                ))}
            </div>
            <button onClick={saveDailyLog(props.email,)} className={styles.saveButton}>Save</button>
        </div>

    )
}

export default EveningRoutine;