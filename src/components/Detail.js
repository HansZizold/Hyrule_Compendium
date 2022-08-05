import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getDetails } from '../redux/detail/detail';

import styles from './Detail.module.css';

const Detail = () => {
  const details = useSelector((state) => state.details);
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch]);

  // console.log(details.data);
  const {
    attack, category, defense, description, image, name, commonLocations,
  } = details;

  let locations = ['Unavailable'];
  if (commonLocations) locations = commonLocations;
  console.log(locations, id);

  return (
    <div className={styles.main}>
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
};
export default Detail;
