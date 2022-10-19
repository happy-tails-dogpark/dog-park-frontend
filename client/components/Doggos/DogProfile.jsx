import { useEffect, useState } from 'react';
import { getDogById } from '../../services/dogs';
import styles from './DogProfile.css';

export default function DogProfile() {
  const [dog, setDog] = useState({});
  console.log('dog', dog);

  useEffect(() => {
    async function fetchDogs() {
      const response = await getDogById();
      console.log('response', response);
      setDog(response.data);
    } fetchDogs();
  }, []
  );

  return (
    <div className={styles.Profile}>
      <h2>Name: {dog.name}</h2>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
    </div>
  );
}
