/* eslint-disable max-len */
import { useState } from 'react';
import { getYelp } from '../../services/fetch-utils';
import styles from './ParkList.css';

export default function ParkList() {                                        
  const [parks, setParks] = useState([]);
  const [yelpQuery, setYelpQuery] = useState('');

  async function fetchAndStoreParks() {
    const data = await getYelp(yelpQuery);
    // const yelpData = data.toString();
    setParks(data);                                     
    console.log('parks', parks);                            
    console.log('blue', data);
                          
  }

  async function handleYelpSubmit(e) {
    e.preventDefault();
    await fetchAndStoreParks();

    setYelpQuery('');
  }

  // useEffect(() => {
  //   fetchAndStoreParks();
  // }, []);
  console.log('apple', parks);

  return (
    <div className={styles.parkList}>
      <div className={styles.yelpList}>
        <form onSubmit={handleYelpSubmit}>
          <h2>Where are you today?</h2>
          <input placeholder="City, State"onChange={e => setYelpQuery(e.target.value)} />
          <button>Search</button>
        </form>
        {
          parks.map((park, i) => <div className={styles.park} key={park.name + i}>
            <p>{park.name}</p>
            <div className={styles.parkImage}>
              <img src={park.image_url} />
            </div>
          </div>)
        }
      </div>
    </div>
  );
}
