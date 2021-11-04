import styles from './MyRoutines.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import ProductCard from '../../components/MyRoutine/ProductCard';
import SearchInput from '../../components/MyRoutine/ProductAutocomplete/SearchInput';


function MyRoutines(props) {

    const [loadedProducts, setLoadedProducts] = useState([]);

    useEffect(() => {

        axios.get('/products')
            .then(results => {
                console.log(results.data)
                setLoadedProducts(results.data);
            })
            .catch(error => console.log(error));

    }, [])


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

    const ProductSubmitHandler = async () => {

        await axios.post(`/products/${props.email}`,)
            .then(results => {

            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <div className={styles.morningRoutine}>
                <h1 className={styles.heading}>Morning Routine  </h1>

                <form className={styles.userInput}>
                    <Select options={categoryOptions} />

                    <SearchInput setProduct={setProduct} />

                    <button onSubmit={ProductSubmitHandler}>Add Product</button>
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
                    <Select options={categoryOptions} />

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