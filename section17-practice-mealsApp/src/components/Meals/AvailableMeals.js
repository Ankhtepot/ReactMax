import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import {useEffect, useState} from "react";

const AvailableMeals = () => {
        const [meals, setMeals] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [httpError, setHttpError] = useState();

        useEffect(() => {
            const fetchMeals = async () => { // this is made so useEffect doeasn;t return async function, which is not good thing if it does
                const response = await fetch('https://react-http-65df3-default-rtdb.europe-west1.firebasedatabase.app/Meals.json');

                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }

                const responseData = await response.json();

                if (responseData === null) {
                    throw new Error('Failed to fetch.');
                }

                const loadedMeals = [];

                Object.keys(responseData).forEach(key => {
                    loadedMeals.push({
                        id: key,
                        name: responseData[key].name,
                        description: responseData[key].description,
                        price: responseData[key].price,
                    })
                })

                setMeals(loadedMeals);
                setIsLoading(false);
            }

            fetchMeals().catch(error => {
                setIsLoading(false);
                setHttpError(error.message);
            });

        }, [])
        ;

        const mealsList = meals.map((meal) => (
            <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        ));

        if (isLoading) {
            return <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        }

        if (httpError) {
            return <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        }

        return (
            <section className={classes.meals}>
                <Card>
                    <ul>{mealsList}</ul>
                </Card>
            </section>
        );
    }
;

export default AvailableMeals;
