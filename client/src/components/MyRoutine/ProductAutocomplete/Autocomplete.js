import { useState, useEffect } from 'react';
import styles from './Autocomplete.module.css';


function Autocomplete({ suggestions, setProduct }) {

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

    const cleanedSuggestions = suggestions.map((eachSuggestion) => {
        return {
            productName: `${eachSuggestion.brandName} ${eachSuggestion.displayName}`,
            productId: eachSuggestion.productId
        }
    })



    const onChangeHandler = (e) => {
        const userInput = e.target.value;

        // Filter our suggestions that don't contain the user's input
        const unLinked = suggestions.filter(
            (eachSuggestion) => {
                let theProduct =
                {
                    productName: `${eachSuggestion.brandName} ${eachSuggestion.displayName}`,
                    productId: eachSuggestion.productId,

                }

                return theProduct.productName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
            }
        );


        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClickHandler = (e, suggestion) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setProduct(suggestion);
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
                value={input} />
            {showSuggestions && input && <SuggestionsListComponent />}
        </div>

    )
}

export default Autocomplete;