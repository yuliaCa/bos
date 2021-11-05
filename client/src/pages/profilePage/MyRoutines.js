import styles from './MyRoutines.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import Select from 'react-select';
import ProductCard from '../../components/MyRoutine/ProductCard';
import SearchInput from '../../components/MyRoutine/ProductAutocomplete/SearchInput';


function MyRoutines(props) {

    const [loadedProducts, setLoadedProducts] = useState([]);

    const [checkedAll, setCheckedAll] = useState(false);

    const checkAllHandler = () => {
        setCheckedAll(checkedAll ? false : true)
    }

    const categoryOptions = [
        { label: "Cleanser", value: "cleanser" },
        { label: "Moisturizer", value: "moisturizer" },
        { label: "Treatment", value: "treatment" },
        { label: "Mask", value: "mask" },
        { label: "Eyecare", value: "eyecare" },
        { label: "Sunscreen", value: "sunscreen" }
    ]

    const [product, setProduct] = useState('');

    useEffect(() => {

        axios.get('/products')
            .then(results => {
                console.log(results.data)
                setLoadedProducts(results.data);
            })
            .catch(error => console.log(error));

    }, [])



    const [productObject, setProductObject] = useState({});

    async function ProductSubmitHandler(event) {
        event.preventDefault();
        console.log('Submitted!')
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

            await axios.request(options).then(function (response) {
                console.log(response.data);

                let theProductObj = {
                    productName: response.data.displayName,
                    images: response.data.currentSku.skuImages.image250,
                    brandName: response.data.brandName,
                    description: response.data.longDescription,
                    category: response.data.parentCategory.displayName,
                    ingredients: response.data.currentSku.ingredientDesc
                }
                setProductObject(theProductObj);

            }).catch(function (error) {
                console.error(error);
            });
            await axios.post(`/products`, productObject)
                .then(results => {
                    console.log(results)
                })
                .catch(error => console.log(error))
        }
    }


    return (
        <div>
            <div className={styles.morningRoutine}>
                <h1 className={styles.heading}>Morning Routine  </h1>

                <form className={styles.userInput} onSubmit={(event) => ProductSubmitHandler(event)}>
                    <Select options={categoryOptions} />

                    <SearchInput setProduct={setProduct} />

                    <button>Add Product</button>
                </form>

                <div className={styles.selectAll}>
                    <label className={styles.selectAllLabel}> Select All
                    <input className={styles.selectAllInput} type="checkbox" value={checkedAll} onChange={checkAllHandler} />
                    </label>
                </div>

                <div className={styles.productsGrid}>
                    {loadedProducts.map((eachProduct) => (
                        <ProductCard
                            key={eachProduct._id}
                            id={eachProduct._id}
                            image={eachProduct.images}
                            category={eachProduct.productCategory}
                            name={eachProduct.productName}
                            description={eachProduct.productDescription}
                            checkAll={checkedAll}
                        />
                    ))}
                </div>
                <button className={styles.saveButton}>Save</button>
            </div>
            <div className={styles.eveningRoutine}>
                <h1 className={styles.heading}>Evening Routine  </h1>

                <div className={styles.userInput}>
                    {/* <Select options={categoryOptions} /> */}

                    <SearchInput />

                    <button>Add Product</button>
                </div>

                <div className={styles.selectAll}>
                    <label className={styles.selectAllLabel}> Select All
                    <input className={styles.selectAllInput} type="checkbox" value={checkedAll} onChange={checkAllHandler} />
                    </label>
                </div>

                <div className={styles.productsGrid}>
                    {loadedProducts.map((eachProduct) => (
                        <ProductCard
                            key={eachProduct._id}
                            id={eachProduct._id}
                            image={eachProduct.images}
                            category={eachProduct.productCategory}
                            name={eachProduct.productName}
                            description={eachProduct.productDescription}
                            checkAll={checkedAll}
                        />
                    ))}
                </div>
                <button className={styles.saveButton}>Save</button>
            </div>
        </div>
    )
}

export default MyRoutines;