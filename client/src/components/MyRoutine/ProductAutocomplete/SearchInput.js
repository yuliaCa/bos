import Autocomplete from './Autocomplete';

function SearchInput() {


    return (
        <div>
            <Autocomplete suggestions={
                ['Dior Cream',
                    'Origins Mask',
                    'Armani Beauty cleanser',
                    'Estee Lauder Serum'
                ]
            } />
        </div>
    )
}

export default SearchInput;