import React from 'react';
import styles from './Categories.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addSelectedCategory } from '../../State/Category/CategoryActions';
import { useHistory } from 'react-router-dom';

const CategoryCard = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
   

    const redirectToCategoryView = (e) => {
        //console.log(props.category[0]);
        dispatch(addSelectedCategory(props.category[0]));
        history.push('/category')
    }

    return (
        <>

            <div className={styles.card} onClick={redirectToCategoryView}>
                <img src={props.category[1]} className={styles.categoryImage} />
                <h5 className={styles.categoryText} > {props.category[0]} </h5>
            </div>
        
        </>
    );

}

export default CategoryCard;