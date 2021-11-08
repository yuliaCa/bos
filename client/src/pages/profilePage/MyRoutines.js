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

    // ================================================
    // Handlers for showing Product Details Section
    // ================================================
    const [showProductDetailsMorning, setShowProductDetailsMorning] = useState(false);
    const openDetailsMorning = () => {
        setShowProductDetailsMorning(true);
    }
    const closeDetailsMorning = () => {
        setShowProductDetailsMorning(false);
    }

    const [showProductDetailsEvening, setShowProductDetailsEvening] = useState(false);
    const openDetailsEvening = () => {
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

    const [checkedAll, setCheckedAll] = useState(false);

    const checkAllHandler = () => {
        setCheckedAll(checkedAll ? false : true)
    }


    const [product, setProduct] = useState('');

    const [productObject, setProductObject] = useState({});


    useEffect(() => {
        axios.get(`/profile/${props.email}`)
            .then(results => {
                console.log(results.data)
                // setMorningLoadedProducts(results.data);
            })
            .catch(error => console.log(error));

    }, [productObject])


    // useEffect(() => {

    //     axios.get('/products')
    //         .then(results => {
    //             console.log(results.data)
    //             setEveningLoadedProducts(results.data);
    //         })
    //         .catch(error => console.log(error));

    // }, [productObject])


    const ProductSubmitMorningHandler = (event) => {
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
                .then(function (response) {
                    console.log(response.data);

                    let theProductObj = {
                        productName: response.data.displayName,
                        images: response.data.currentSku.skuImages.image250,
                        brandName: response.data.brandName,
                        description: response.data.longDescription,
                        category: response.data.parentCategory.displayName,
                        ingredients: response.data.currentSku.ingredientDesc,
                        suggestedUsage: response.data.suggestedUsage
                    }
                    setProductObject(theProductObj);

                })
                .catch(function (error) {
                    console.error(error);
                });
        }

        axios.put(`/profile/addProductMorning/${props.email}`, productObject)
            .then(results => {
                console.log('I AM GETTING POSTED INTO MORNING ROUTINE!')
            })
            .catch(error => console.log(error))
    }

    const ProductSubmitEveningHandler = (event) => {
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
                .then(function (response) {
                    console.log(response.data);

                    let theProductObj = {
                        productName: response.data.displayName,
                        images: response.data.currentSku.skuImages.image250,
                        brandName: response.data.brandName,
                        description: response.data.longDescription,
                        category: response.data.parentCategory.displayName,
                        ingredients: response.data.currentSku.ingredientDesc,
                        suggestedUsage: response.data.suggestedUsage
                    }
                    setProductObject(theProductObj);

                })
                .catch(function (error) {
                    console.error(error);
                });
        }

        axios.put(`/addProductEvening/${props.email}`, productObject)
            .then(results => {
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
                        theProductName={theProductName} /> :
                    <MorningRoutine
                        ProductSubmitHandler={ProductSubmitMorningHandler}
                        checkAllHandler={checkAllHandler}
                        loadedProducts={MorningLoadedProducts}
                        setProduct={setProduct}
                        openDetailsMorning={openDetailsMorning}
                        evening={false}
                        setTheProductName={setTheProductName}
                    />}

            </div>

            <div>
                <h1>{headingEveningRoutine}</h1>
                {showProductDetailsEvening ?
                    <ProductDetails
                        closeDetailsEvening={closeDetailsEvening}
                        evening={true}
                        theProductName={theProductName} /> :
                    <EveningRoutine
                        ProductSubmitHandler={ProductSubmitEveningHandler}
                        checkAllHandler={checkAllHandler}
                        loadedProducts={EveningLoadedProducts}
                        setProduct={setProduct}
                        openDetailsEvening={openDetailsEvening}
                        evening={true}
                    />}
            </div>


        </div>
    )
}

export default MyRoutines;