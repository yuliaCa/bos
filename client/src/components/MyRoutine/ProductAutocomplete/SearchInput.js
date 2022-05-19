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
                'x-rapidapi-host': process.env.REACT_APP_SEPHORA_API_HOST,
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
        };

        axios.request(options).then(function (response) {

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