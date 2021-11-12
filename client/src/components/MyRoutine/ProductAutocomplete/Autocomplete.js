import { useState, useEffect } from 'react';
import styles from './Autocomplete.module.css';


function Autocomplete(props) {

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    // const [input, setInput] = useState("");

    const onChangeHandler = (e) => {
        const userInput = e.target.value;

        // Filter our suggestions that don't contain the user's input
        const unLinked = props.suggestions.filter(
            (eachSuggestion) => {
                let theProduct =
                {
                    productName: `${eachSuggestion.brandName} ${eachSuggestion.displayName}`,
                    productId: eachSuggestion.productId,

                }

                return theProduct.productName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
            }
        );


        props.setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClickHandler = (e, suggestion) => {
        setFilteredSuggestions([]);
        props.setInput(e.target.innerText);
        props.setProduct(suggestion);
        console.log(suggestion);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    };


    const SuggestionsListComponent = () => {
        return filteredSuggestions.length ? (
            <ul className={styles.suggestions}>
                {filteredSuggestions.map((suggestion, index) => {

                    // if (index === activeSuggestionIndex)
                    return (
                        <li className={styles.active_suggestion} key={suggestion.productId} onClick={(event) => onClickHandler(event, suggestion)}>
                            {suggestion.brandName + " " + suggestion.displayName}
                        </li>
                    );
                })}
            </ul>
        ) : (
                <div className={styles.no_suggestions}>
                    <em>No matching products were found.</em>
                </div>
            );
    };



    return (
        <div>
            <input type="text" onChange={onChangeHandler}
                value={props.input} />
            {showSuggestions && props.input && <SuggestionsListComponent />}
        </div>

    )
}

export default Autocomplete;