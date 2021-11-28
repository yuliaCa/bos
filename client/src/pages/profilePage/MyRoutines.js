import styles from './MyRoutines.module.css';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import MorningRoutine from '../../components/MyRoutine/MorningRoutine';
import EveningRoutine from '../../components/MyRoutine/EveningRoutine';
import ProductDetails from '../../components/MyRoutine/ProductDetails';
import SkinFeeling from '../../components/MyRoutine/SkinFeeling.js';


function MyRoutines(props) {

    //input when searching for the product 
    const [input, setInput] = useState("");

    // ================================================
    // Handlers for showing Product Details Section
    // ================================================
    const [showProductDetailsMorning, setShowProductDetailsMorning] = useState(false);
    const [prodObjForDetails, setProdObjForDetails] = useState();
    const openDetailsMorning = (event, productID) => {
        const theProductForDetails = MorningLoadedProducts.filter(product => product._id === productID)
        console.log(theProductForDetails[0])
        setProdObjForDetails(theProductForDetails[0]);
        setShowProductDetailsMorning(true);
    }

    const closeDetailsMorning = () => {
        setShowProductDetailsMorning(false);
    }

    const [showProductDetailsEvening, setShowProductDetailsEvening] = useState(false);
    const openDetailsEvening = (event, productID) => {
        const theProductForDetails = EveningLoadedProducts.filter(product => product._id === productID)
        console.log(theProductForDetails[0])
        setProdObjForDetails(theProductForDetails[0]);

        setShowProductDetailsEvening(true);
    }

    const closeDetailsEvening = () => {
        setShowProductDetailsEvening(false)
    }

    // Get THE product Object for details
    const [theProductName, setTheProductName] = useState();

    // ================================================
    //Pulling up all the products within each routine
    // ================================================
    const [MorningLoadedProducts, setMorningLoadedProducts] = useState([]);
    const [EveningLoadedProducts, setEveningLoadedProducts] = useState([]);


    // ================================================
    //"Check All" components for Evening and Morning
    // ================================================

    // const [checkedMorningAll, setCheckedMorningAll] = useState(false);
    // const checkAllMorningHandler = () => {
    //     setCheckedMorningAll(checkedMorningAll ? false : true)
    // }


    const [checkedEveningAll, setCheckedEveningAll] = useState(false);
    const checkAllEveningHandler = () => {
        setCheckedEveningAll(checkedEveningAll ? false : true)
    }

    // ================================================
    //Creating products and pulling the list of products
    // ================================================
    const [product, setProduct] = useState('');

    const [productObject, setProductObject] = useState({});



    useEffect(() => {

        axios.get(`https://bos-project2.herokuapp.com/profile/${props.email}/morningProducts`)
            .then(results => {
                console.log(results.data.objMorningRoutineLog)
                setMorningLoadedProducts(results.data.objMorningRoutineLog);
            })

        axios.get(`https://bos-project2.herokuapp.com/profile/${props.email}/eveningProducts`)
            .then(results => {
                console.log(results.data.objEveningRoutineLog)
                setEveningLoadedProducts(results.data.objEveningRoutineLog);
            })
            .catch(error => console.log(error));

    }, [])




    const stringToArray = (string) => {
        let strArray = string.split('<br>');
        const arrayLength = strArray.length - 1;

        for (let x = 0; x < arrayLength; x++) {
            strArray[x] = strArray[x].replace('<b>', '');
            strArray[x] = strArray[x].replace('</b>', '');
            strArray[x] = strArray[x].replace('-', '');
            strArray[x] = strArray[x].replace(':', '');
            strArray[x] = strArray[x].replace('<br>', '');
        }
        return strArray;
    }

    // Getting Category value from Select component
    const morningCategoryRef = useRef();
    const eveningCategoryRef = useRef();


    const submitMorningProduct = event => {
        event.preventDefault();
        if (product) {
            const options = {
                method: 'GET',
                url: 'https://sephora.p.rapidapi.com/products/detail',
                params: {
                    productId: product.productId,
                    preferedSku: product['currentSku']['skuId']
                },
                headers: {
                    'x-rapidapi-host': 'sephora.p.rapidapi.com',
                    'x-rapidapi-key': '2b5c9fd8d8msh0132ae34892c4f1p161c42jsnb732f5ff681a'
                }
            };
            axios.request(options)
                .then(response => {
                    let newProduct = {
                        objMorningRoutineLog: [{
                            productName: response.data.displayName,
                            images: response.data.currentSku.skuImages.image250,
                            brandName: response.data.brandName,
                            description: response.data.longDescription,
                            category: morningCategoryRef.current.props.value.label,
                            ingredients: response.data.currentSku.ingredientDesc,
                            suggestedUsage: response.data.suggestedUsage
                        }]
                    };

                    return newProduct;
                })
                .then(newProduct => {
                    console.log(newProduct)
                    axios.put(`https://bos-project2.herokuapp.com/profile/addProductMorning/${props.email}`, newProduct)
                        .then(results => {

                            axios.get(`https://bos-project2.herokuapp.com/profile/${props.email}/morningProducts`)
                                .then(results => {
                                    console.log(results.data.objMorningRoutineLog)
                                    setMorningLoadedProducts(results.data.objMorningRoutineLog);
                                })
                        })
                })
                .catch(error => console.log(error))
            setInput('');
        }
    }

    const submitEveningProduct = event => {
        event.preventDefault();
        if (product) {
            const options = {
                method: 'GET',
                url: 'https://sephora.p.rapidapi.com/products/detail',
                params: {
                    productId: product.productId,
                    preferedSku: product['currentSku']['skuId']
                },
                headers: {
                    'x-rapidapi-host': 'sephora.p.rapidapi.com',
                    'x-rapidapi-key': '2b5c9fd8d8msh0132ae34892c4f1p161c42jsnb732f5ff681a'
                }
            };
            axios.request(options)
                .then(response => {
                    let newProduct = {
                        objEveningRoutineLog: [{
                            productName: response.data.displayName,
                            images: response.data.currentSku.skuImages.image250,
                            brandName: response.data.brandName,
                            description: response.data.longDescription,
                            category: eveningCategoryRef.current.props.value.label,
                            ingredients: response.data.currentSku.ingredientDesc,
                            suggestedUsage: response.data.suggestedUsage
                        }]
                    };

                    return newProduct;
                })
                .then(newProduct => {
                    console.log(newProduct)
                    axios.put(`https://bos-project2.herokuapp.com/profile/addProductEvening/${props.email}`, newProduct)
                        .then(results => {

                            axios.get(`https://bos-project2.herokuapp.com/profile/${props.email}/eveningProducts`)
                                .then(results => {
                                    setEveningLoadedProducts(results.data.objEveningRoutineLog);
                                })
                        })
                })
                .catch(error => console.log(error))
            setInput('');
        }
    }

    const deleteProductHandler = (event, productName, evening) => {
        if (!evening) {
            axios.delete(`https://bos-project2.herokuapp.com/profile/deleteProductMorning/${props.email}/${productName}`)
                .then(result => {
                    axios.get(`https://bos-project2.herokuapp.com/profile/${props.email}/morningProducts`)
                        .then(results => {
                            console.log(results.data.objMorningRoutineLog)
                            setMorningLoadedProducts(results.data.objMorningRoutineLog);
                        })
                }
                )
                .catch(error => console.log(error))

        } else if (evening) {
            axios.delete(`https://bos-project2.herokuapp.com/profile/deleteProductEvening/${props.email}/${productName}`)
                .then(result => {
                    axios.get(`https://bos-project2.herokuapp.com/profile/${props.email}/eveningProducts`)
                        .then(results => {
                            setEveningLoadedProducts(results.data.objEveningRoutineLog);
                        })
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className={styles.myRoutines}>

            <div className={styles.morningRoutine}>
                <h1 className={styles.heading}>Morning Routine</h1>
                {showProductDetailsMorning ?
                    <ProductDetails
                        closeDetailsMorning={closeDetailsMorning}
                        evening={false}
                        theProduct={prodObjForDetails}
                        stringToArray={stringToArray}
                        deleteProductHandler={deleteProductHandler} /> :
                    <MorningRoutine
                        ProductSubmitHandler={submitMorningProduct}
                        morningCategoryRef={morningCategoryRef}
                        loadedProducts={MorningLoadedProducts}
                        setProduct={setProduct}
                        openDetailsMorning={openDetailsMorning}
                        evening={false}
                        setTheProductName={setTheProductName}
                        email={props.email}
                        setInput={setInput}
                        input={input}
                        productObject={productObject}
                        deleteProductHandler={deleteProductHandler}
                    />}

            </div>

            <div className={styles.eveningRoutine}>
                <h1 className={styles.heading}>Evening Routine</h1>
                {showProductDetailsEvening ?
                    <ProductDetails
                        closeDetailsEvening={closeDetailsEvening}
                        evening={true}
                        theProduct={prodObjForDetails}
                        stringToArray={stringToArray}
                        deleteProductHandler={deleteProductHandler} /> :
                    <EveningRoutine
                        ProductSubmitHandler={submitEveningProduct}
                        eveningCategoryRef={eveningCategoryRef}
                        checkAllHandler={checkAllEveningHandler}
                        checkedAll={checkedEveningAll}
                        loadedProducts={EveningLoadedProducts}
                        setProduct={setProduct}
                        openDetailsEvening={openDetailsEvening}
                        evening={true}
                        setTheProductName={setTheProductName}
                        email={props.email}
                        setInput={setInput}
                        input={input}
                        productObject={productObject}
                        deleteProductHandler={deleteProductHandler}
                    />}
            </div>
            <SkinFeeling />
        </div>
    )

}

export default MyRoutines;