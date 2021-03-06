import styles from '../../pages/profilePage/MyRoutines.module.css';
import axios from 'axios';
import { useState, useRef } from 'react';
import Select from 'react-select';
import ProductCard from '../../components/MyRoutine/ProductCard';
import SearchInput from '../../components/MyRoutine/ProductAutocomplete/SearchInput';
import Fade from "react-reveal/Fade";

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



    const arrayProductsForMorningLog = [];
    const [saved, setSaved] = useState(false);

    const saveDailyLog = (event, email, _objRoutineLog, _overallRate) => {
        setSaved(true);
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
                <Select
                    value={props.value}
                    onChange={(event) => props.selectHandler(event)}
                    placeholder="Select Category"
                    styles={customStyles}
                    className={styles.userInputSelect}
                    options={categoryOptions}
                    isClearable
                />

                <SearchInput className={styles.productName} setProduct={props.setProduct} setInput={props.setInput} input={props.input} />

                <button>Add Product</button>
            </form>

            <div className={styles.selectAll}>
                <p>Added Products</p>
                <label className={styles.selectAllLabel}>
                    <span>Select All</span>
                    <input className={styles.selectAllInput} type="checkbox" value={checkAll} onChange={checkAllHandler} />
                </label>
            </div>

            <div className={styles.productsGrid}>
                {props.loadedProducts.map((eachProduct) => (
                    <Fade right>
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
                    </Fade>
                ))}
            </div>
            <button className={styles.saveButton} onClick={event => saveDailyLog(event, props.email, arrayProductsForMorningLog)}>{saved ? 'Saved' : 'Save'}</button>
        </div>

    )
}

export default MorningRoutine;