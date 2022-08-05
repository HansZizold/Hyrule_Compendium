import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getItems } from '../redux/items/items';
import Category from './Category';
import styles from './Items.module.css';

const Items = () => {
  const itemlist = useSelector((state) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems('equipment'));
  }, [dispatch]);

  return (
    <div>
      <Category />
      <div className={styles.mainitems}>
        {itemlist.map((elem) => {
          const {
            id, name, image, attack, defense, cookingeffect, commonlocations, category,
          } = elem;
          let locations = 'Unavailable';
          if (commonlocations) [locations] = commonlocations;
          if (category === 'equipment') {
            return (
              <Link
                to={`${name}/${id}`}
                key={id}
                className={styles.singleitem}
              >
                <h3 className={styles.itemname}>{name}</h3>
                <img src={image} alt="Hyrule Compendium" width="300" />
                <p className={styles.features}>
                  Attack:
                  {' '}
                  {attack || '0'}
                  {' '}
                  Defense:
                  {' '}
                  {defense || '0'}
                </p>
              </Link>
            );
          }

          if (category === 'creatures' || category === 'materials') {
            return (
              <div key={id} className={styles.singleitem}>
                <h3 className={styles.itemname}>{name}</h3>
                <img src={image} alt="Hyrule Compendium" width="300" />
                <p className={styles.cooking}>
                  Cooking Effect:
                  {' '}
                  {cookingeffect || 'No Effect'}
                </p>
              </div>
            );
          }

          if (category === 'monsters' || category === 'treasure') {
            return (
              <div key={id} className={styles.singleitem}>
                <h3 className={styles.itemname}>{name}</h3>
                <img src={image} alt="Hyrule Compendium" width="300" />
                <p className={styles.cooking}>
                  Common Location:
                  {' '}
                  {locations}
                </p>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};
export default Items;
