import styles from './MyRoutines.module.css';

function MyRoutines() {

    return (

        <div>
            <h1 className={styles.heading}>Morning Routine</h1>

            <div className={styles.userInput}>
                <select value="category" >
                    <option>api category 1</option>
                    <option>api category 2</option>
                    <option>api category 3</option>
                </select>
                <input type="text" placeholder="Product Name"></input>
                or
                <select value="category" >
                    <option>api product 1</option>
                    <option>api product 2</option>
                    <option>api product 3</option>
                </select>
                <button>Add Product</button>
            </div>

        </div>
    )
}

export default MyRoutines;