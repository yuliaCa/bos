import styles from './MyRoutines.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MorningRoutine from '../../components/MyRoutine/MorningRoutine';
import EveningRoutine from '../../components/MyRoutine/EveningRoutine';
import Select from 'react-select';
import ProductCard from '../../components/MyRoutine/ProductCard';
import SearchInput from '../../components/MyRoutine/ProductAutocomplete/SearchInput';


function MyRoutines(props) {

    const [MorningLoadedProducts, setMorningLoadedProducts] = useState([]);
    const [EveningLoadedProducts, setEveningLoadedProducts] = useState([]);

    const [checkedAll, setCheckedAll] = useState(false);

    const checkAllHandler = () => {
        setCheckedAll(checkedAll ? false : true)
    }


    const [product, setProduct] = useState('');

    const [productObject, setProductObject] = useState({});

    useEffect(() => {

        axios.get('/products')
            .then(results => {
                console.log(results.data)
                setMorningLoadedProducts(results.data);
            })
            .catch(error => console.log(error));

    }, [productObject])
    useEffect(() => {

        axios.get('/products')
            .then(results => {
                console.log(results.data)
                setEveningLoadedProducts(results.data);
            })
            .catch(error => console.log(error));

    }, [productObject])

    function pullDetailsSephoraAPI() {
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

        axios.request(options).then(function (response) {
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

        }).catch(function (error) {
            console.error(error);
        });
    }

    const ProductSubmitMorningHandler = (event) => {
        event.preventDefault();
        console.log('Submitted!')
        if (product) {

            pullDetailsSephoraAPI();
            axios.post(`addProductMorning/${props.email}`, productObject)
                .then(results => {
                    console.log('I AM GETTING POSTED YEA')
                })
                .catch(error => console.log(error))
        }
    }

    const ProductSubmitEveningHandler = (event) => {
        event.preventDefault();
        console.log('Submitted!')
        if (product) {

            pullDetailsSephoraAPI();
            axios.post(`addProductEvening/${props.email}`, productObject)
                .then(results => {
                    console.log('I AM GETTING POSTED YEA')
                })
                .catch(error => console.log(error))
        }
    }


    return (
        <div>

            <MorningRoutine
                ProductSubmitHandler={ProductSubmitMorningHandler}
                checkAllHandler={checkAllHandler}
                loadedProducts={MorningLoadedProducts}
                setProduct={setProduct}
            />

            <EveningRoutine
                ProductSubmitHandler={ProductSubmitEveningHandler}
                checkAllHandler={checkAllHandler}
                loadedProducts={EveningLoadedProducts}
                setProduct={setProduct}
            />


        </div>
    )
}

export default MyRoutines;