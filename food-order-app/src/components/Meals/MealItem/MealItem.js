import MealItemForm from './MealItemForm';

import styles from './MealItem.module.css';

const MealItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} mealInfo={{ name: props.name, price: props.price, id: props.id }}/>
            </div>
        </li>
    );
};

export default MealItem;