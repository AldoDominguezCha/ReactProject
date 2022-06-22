import { useState, useEffect } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


import styles from './AvailableMeals.module.css';


const AvailableMeals = () => {

    const [mealDataState, setMealDataState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    
    useEffect(() => {
      const getMealsData = async () => {
        const response = await fetch('https://react-http-test-4d2b2-default-rtdb.firebaseio.com/meals.json', {
            method: 'GET'
        });

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        setMealDataState(data); 
        setIsLoading(false);
      };

      getMealsData().catch(error => {
        setIsLoading(false);
        setHttpError(error.message);
      });

    }, []);
    
    if (isLoading) {
      return (
        <section className={styles.mealsLoading}>
          <p>Loading...</p>
        </section>
      );
    }

    if (httpError) {
      return (
        <section className={styles.mealsHttpError}>
          <p>{`Error retrieving the data. ${httpError} :(`}</p>
        </section>
      )
    }
    
    const mealsList = mealDataState.map(({ id, name, description, price }) => <MealItem key={id} name={name} description={description} price={price} id={id}/>);
    
    return (
        <section className={styles.meals}>
            <Card>
              <ul>
                  {mealsList}
              </ul>
            </Card>
        </section>
    );
};  

export default AvailableMeals;