import { useState, useEffect } from 'react';
import styles from './Autocomplete.module.css';


function Autocomplete({ suggestions, setProduct }) {

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

    const cleanedSuggestions = suggestions.map((eachSuggestion) => eachSuggestion['brandName'] + " " + eachSuggestion['displayName'] + " " + eachSuggestion['productId'])

    const onChangeHandler = (e) => {
        const userInput = e.target.value;

        // Filter our suggestions that don't contain the user's input
        const unLinked = cleanedSuggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClickHandler = (e) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setProduct(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    };


    const SuggestionsListComponent = () => {
        return filteredSuggestions.length ? (
            <ul className={styles.suggestions}>
                {filteredSuggestions.map((suggestion, index) => {

                    // if (index === activeSuggestionIndex)
                    return (
                        <li className={styles.active_suggestion} key={suggestion} onClick={onClickHandler}>
                            {suggestion}
                        </li>
                    );
                })}
            </ul>
        ) : (
                <div className={styles.no_suggestions}>
                    <em>No suggestions, you're on your own!</em>
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