import React from 'react';
import { useDispatch } from 'react-redux';
import { getItems } from '../redux/items/items';
import styles from './Category.module.css';

const Category = () => {
  const dispatch = useDispatch();

  const handleOption = (elem) => {
    const category = elem.target.value;
    dispatch(getItems(category));
  };
  return (
    <div className={styles.category}>
      <h2 className={styles.select}>SELECT CATEGORY</h2>
      <select
        onChange={handleOption}
        className={styles.options}
        name="category"
        id="category"
      >
        <option className={styles.singleoption} value="">Choose a Category</option>
        <option className={styles.singleoption} value="equipment">Equipment</option>
        <option className={styles.singleoption} value="creatures">Creatures</option>
        <option className={styles.singleoption} value="materials">Materials</option>
        <option className={styles.singleoption} value="monsters">Monsters</option>
        <option className={styles.singleoption} value="treasure">Treasure</option>
      </select>
    </div>
  );
};
export default Category;
