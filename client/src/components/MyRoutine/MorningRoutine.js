import styles from '../../pages/profilePage/MyRoutines.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import ProductCard from '../../components/MyRoutine/ProductCard';
import SearchInput from '../../components/MyRoutine/ProductAutocomplete/SearchInput';

const customStyles = {

    control: (provided, state) => ({
        // none of react-select's styles are passed to <Control />
        ...provided,
        border: "none",
        height: "45px"

    }),
    container: () => ({
        height: "45px"
    }),
    valueContainer: () => ({
        height: "50px"
    }),
    placeholder: (provided, state) => ({
        ...provided,
        height: "45px",
        padding: "12.5px 0 15px 10px"

    }),

    indicatorSeparator: (provided, state) => ({
        ...provided,
        height: "35px",
        backgroundColor: "#ad967d",
        margin: "5px 0"
    }),
    indicatorContainer: (provided, state) => ({
        ...provided,
        height: "35px",
        color: "#ad967d",
        margin: "5px 0"
    }),

    singleValue: (provided, state) => ({
        ...provided,
        height: "45px",
        padding: "12.5px 0 15px 10px"
    }),
    menu: (provided, state) => ({
        ...provided,
        position: "relative",
        top: "-10px"

    })
}



const MorningRoutine = (props) => {

    const categoryOptions = [
        { label: "Cleanser", value: "cleanser" },
        { label: "Moisturizer", value: "moisturizer" },
        { label: "Treatment", value: "treatment" },
        { label: "Mask", value: "mask" },
        { label: "Eyecare", value: "eyecare" },
        { label: "Sunscreen", value: "sunscreen" }
    ]

    const selectHandler = (event) => {

    }

    const arrayProductsForMorningLog = [];


    const saveDailyLog = (event, email, _objRoutineLog, _overallRate) => {
        const today = new Date();
        const dailyLog = {
            objRoutineLog: _objRoutineLog,
            overallRate: _overallRate,
            dailyLogDate: today.toLocaleDateString("en-US")
        }
        axios.post(`https://bos-project2.herokuapp.com/dailyroutine/${email}`, dailyLog)
            .then(results => {
                console.log(dailyLog);
            })
            .catch(error => console.log(error))
    }

    // ================================================
    //"Check All" components 
    // ================================================
    const [productIsUsed, setProductUsedState] = useState(false)
    const [checkAll, setCheckAll] = useState(false);
    const checkAllHandler = () => {
        setCheckAll(checkAll ? false : true);
        setProductUsedState(true)
    }



    return (

        <div className={styles.morningRoutine}>

            <form className={styles.userInput} onSubmit={(event) => props.ProductSubmitHandler(event)}>
                <Select styles={customStyles} className={styles.userInputSelect} options={categoryOptions} />

                <SearchInput setProduct={props.setProduct} setInput={props.setInput} input={props.input} />

                <button >Add Product</button>
            </form>

            <div className={styles.selectAll}>
                <p>Added Products</p>
                <label className={styles.selectAllLabel}>
                    <span>Select All</span>
                    <input className={styles.selectAllInput} type="checkbox" value={props.checkedAll} onChange={checkAllHandler} />
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
                        checkAll={checkAll}
                        productIsUsed={productIsUsed}
                        setProductUsedState={setProductUsedState}
                        openDetailsMorning={props.openDetailsMorning}
                        evening={props.evening}
                        setTheProductName={props.setTheProductName}
                        email={props.email}
                        deleteProductHandler={props.deleteProductHandler}
                        arrayProductsForMorningLog={arrayProductsForMorningLog}
                    />
                ))}
            </div>
            <button className={styles.saveButton} onClick={event => saveDailyLog(event, props.email, arrayProductsForMorningLog)}>Save</button>
        </div>

    )
}

export default MorningRoutine;