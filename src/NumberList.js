import React, { useState } from 'react';
import axios from 'axios';

const NumberList = () => {
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNumbers = async (urls) => {
    setLoading(true);
    try {
      const response = await axios.get('/numbers', {
        params: { url: urls },
      });
      setNumbers(response.data.numbers);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
    setLoading(false);
  };

//function to fetch urls
  const handleFetchClick = () => {
    const urls = [
      'http://20.244.56.144/numbers/primes',
      'http://20.244.56.144/numbers/fibo',
      'http://20.244.56.144/numbers/odd',
      'http://20.244.56.144/numbers/rand',
    ];
    fetchNumbers(urls);
  };
  
// Button functionality
  return (
    <div>
      <button onClick={handleFetchClick} disabled={loading}>
        Fetch Numbers
      </button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
