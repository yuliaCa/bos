import styles from './MyRoutines.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MorningRoutine from '../../components/MyRoutine/MorningRoutine';
import EveningRoutine from '../../components/MyRoutine/EveningRoutine';
import ProductDetails from '../../components/MyRoutine/ProductDetails';
import Select from 'react-select';
import ProductCard from '../../components/MyRoutine/ProductCard';
import SearchInput from '../../components/MyRoutine/ProductAutocomplete/SearchInput';


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
    const closeDetailsEvening = (event, productID) => {
        const theProductForDetails = EveningLoadedProducts.filter(product => product._id === productID)
        console.log(theProductForDetails[0])
        setProdObjForDetails(theProductForDetails[0]);

        setShowProductDetailsEvening(true);
    }
    const closeDetailsEvening = (event, productID) => {
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
    //Pulling up sll the products within each routine
    // ================================================
    const [MorningLoadedProducts, setMorningLoadedProducts] = useState([]);
    const [EveningLoadedProducts, setEveningLoadedProducts] = useState([]);


    // ================================================
    //Check All components for Evening and Morning
    // ================================================
    const [checkedMorningAll, setCheckedMorningAll] = useState(false);
    const checkAllMorningHandler = () => {
        setCheckedMorningAll(checkedMorningAll ? false : true)
    }

    const [checkedEveningAll, setCheckedEveningAll] = useState(false);
    const checkAllEveningHandler = () => {
        setCheckedEveningAll(checkedEveningAll ? false : true)
    }





    const [product, setProduct] = useState('');

    const [productObject, setProductObject] = useState({});

    useEffect(() => {
        axios.get(`/profile/${props.email}/morningProducts`)
            .then(results => {
                console.log(results.data.objMorningRoutineLog)
                setMorningLoadedProducts(results.data.objMorningRoutineLog);
            })
            .catch(error => console.log(error));

    }, [productObject, props.email])

    useEffect(() => {
        axios.get(`/profile/${props.email}/eveningProducts`)
            .then(results => {
                console.log(results.data.objEveningRoutineLog)
                setEveningLoadedProducts(results.data.objEveningRoutineLog);
            })
            .catch(error => console.log(error));
    }, [productObject])

    const stringToArray = (string) => {
        let strArray = string.split('<br>');
        const arrayLength = strArray.length - 1;

        for (let x = 0; x < arrayLength; x++) {
            strArray[x] = strArray[x].replace('<b>', '');
            strArray[x] = strArray[x].replace('</b>', '');
            strArray[x] = strArray[x].replace('-', '');
            strArray[x] = strArray[x].replace(':', '');
        }

        return strArray;
    }


    const ProductSubmitMorningHandler = async function (event) {
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


            await axios.request(options)
                .then(function (response) {

                    let theProductObj = {
                        objMorningRoutineLog: [{
                            productName: response.data.displayName,
                            images: response.data.currentSku.skuImages.image250,
                            brandName: response.data.brandName,
                            description: response.data.longDescription,
                            category: response.data.parentCategory.displayName,
                            ingredients: response.data.currentSku.ingredientDesc,
                            suggestedUsage: response.data.suggestedUsage
                        }]
                    };

                    setProductObject(theProductObj);
                    console.log(productObject);
                })
                .catch(function (error) {
                    console.error(error);
                });
        }

        axios.put(`/profile/addProductMorning/${props.email}`, productObject)
            .then(results => {
                console.log(props.email);

                console.log('I AM GETTING POSTED INTO MORNING ROUTINE!')
            })
            .catch(error => console.log(error))

        setInput('');
    }

    const ProductSubmitEveningHandler = async function (event) {
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

            await axios.request(options)
                .then(function (response) {
                    console.log(response.data);

                    let theProductObj = {
                        objEveningRoutineLog: [{
                            productName: response.data.displayName,
                            images: response.data.currentSku.skuImages.image250,
                            brandName: response.data.brandName,
                            description: response.data.longDescription,
                            category: response.data.parentCategory.displayName,
                            ingredients: response.data.currentSku.ingredientDesc,
                            suggestedUsage: response.data.suggestedUsage
                        }]
                    };

                    setProductObject(theProductObj);

                })
                .catch(function (error) {
                    console.error(error);
                });
        }

        axios.put(`/profile/addProductEvening/${props.email}`, productObject)
            .then(results => {
                console.log(props.email);
                console.log(productObject);
                console.log('I AM GETTING POSTED YEA')
            })
            .catch(error => console.log(error))
    }



    let headingMorningRoutine = `Morning Routine`;
    let headingEveningRoutine = `Evening Routine`;

    return (
        <div>

            <div>
                <h1>{headingMorningRoutine}</h1>
                {showProductDetailsMorning ?
                    <ProductDetails
                        closeDetailsMorning={closeDetailsMorning}
                        evening={false}
                        theProduct={prodObjForDetails}
                        stringToArray={stringToArray} /> :
                    <MorningRoutine
                        ProductSubmitHandler={ProductSubmitMorningHandler}
                        checkAllHandler={checkAllMorningHandler}
                        checkedAll={checkedMorningAll}
                        loadedProducts={MorningLoadedProducts}
                        setProduct={setProduct}
                        openDetailsMorning={openDetailsMorning}
                        evening={false}
                        setTheProductName={setTheProductName}
                        email={props.email}
                        setInput={setInput}
                        input={input}
                        productObject={productObject}
                    />}

            </div>

            <div>
                <h1>{headingEveningRoutine}</h1>
                {showProductDetailsEvening ?
                    <ProductDetails
                        closeDetailsEvening={closeDetailsEvening}
                        evening={true}
                        theProduct={prodObjForDetails}
                        stringToArray={stringToArray} /> :
                    <EveningRoutine
                        ProductSubmitHandler={ProductSubmitEveningHandler}
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
                    />}
            </div>
        </div>
    )

}

export default MyRoutines;