import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getDetails } from '../redux/detail/detail';

import styles from './Detail.module.css';

const Detail = () => {
  const details = useSelector((state) => state.details);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(id));
  }, [id]);

  const {
    attack, category, defense, description, image,
    name, commonLocations, cookingEffect, heartsRecovered,
  } = details;

  let locations = ['Unavailable'];
  if (commonLocations) locations = commonLocations;

  if (category === 'equipment') {
    return (
      <div className={styles.main}>
        <Link to="/" className={styles.back}>&#60;</Link>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.item}>
          <img src={image} alt={name} className={styles.image} />
          <div className={styles.features}>
            <p className={styles.feature}>
              <mark>Description:</mark>
              {' '}
              {description}
            </p>
            <p className={styles.feature}>
              <mark>Attack:</mark>
              {' '}
              {attack || '0'}
            </p>
            <p className={styles.feature}>
              <mark>Defense:</mark>
              {' '}
              {defense || '0'}
            </p>
            <p className={styles.feature}>
              <mark>Category:</mark>
              {' '}
              {category}
            </p>
            <p><mark>Common Lotacions:</mark></p>
            <p className={styles.common}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {locations[0]}
            </p>
            <p className={styles.feature}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {locations[1]}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (category === 'creatures' || category === 'materials') {
    return (
      <div className={styles.main}>
        <Link to="/" className={styles.back}>&#60;</Link>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.item}>
          <img src={image} alt={name} className={styles.image} />
          <div className={styles.features}>
            <p className={styles.feature}>
              <mark>Category:</mark>
              {' '}
              {category}
            </p>
            <p className={styles.feature}>
              <mark>Description:</mark>
              {' '}
              {description}
            </p>
            <p><mark>Common Locations:</mark></p>
            <p className={styles.common}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {locations[0]}
            </p>
            <p className={styles.feature}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {locations[1]}
            </p>
            <p className={styles.feature}>
              <mark>Cooking Effect:</mark>
              {' '}
              {cookingEffect || 'No Effect'}
            </p>
            <p className={styles.feature}>
              <mark>Hearts Recovered:</mark>
              {' '}
              {heartsRecovered || '0'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (category === 'monsters' || category === 'treasure') {
    return (
      <div className={styles.main}>
        <Link to="/" className={styles.back}>&#60;</Link>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.item}>
          <img src={image} alt={name} className={styles.image} />
          <div className={styles.features}>
            <p className={styles.feature}>
              <mark>Category:</mark>
              {' '}
              {category}
            </p>
            <p className={styles.feature}>
              <mark>Description:</mark>
              {' '}
              {description}
            </p>
            <p><mark>Common Locations:</mark></p>
            <p className={styles.common}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {locations[0]}
            </p>
            <p className={styles.feature}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {locations[1]}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
export default Detail;
