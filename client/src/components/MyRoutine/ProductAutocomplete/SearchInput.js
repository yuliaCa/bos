import Autocomplete from './Autocomplete';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../../pages/profilePage/MyRoutines.module.css';

function SearchInput(props) {

    // const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://sephora.p.rapidapi.com/products/list',
            params: { categoryId: 'cat150006' },
            headers: {
                'x-rapidapi-host': 'sephora.p.rapidapi.com',
                'x-rapidapi-key': '2b5c9fd8d8msh0132ae34892c4f1p161c42jsnb732f5ff681a'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data.products);
            setSuggestions(response.data.products)
        }).catch(function (error) {
            console.error(error);
        })
    }, [])



    return (
        <div className={styles.productName}>
            <Autocomplete setProduct={props.setProduct} suggestions={
                suggestions} setInput={props.setInput} input={props.input} />
        </div>
    )
}

export default SearchInput;