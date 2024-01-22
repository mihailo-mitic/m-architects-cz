import axios from "axios";
import { useState } from "react";

const url = "https://api.api-ninjas.com/v1/quotes?category=architecture";
const APIkey = "0OQRA9qgx+QkPZCBJ9zGOg==7ggTuEHBYeDIAc3x";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [fetched, setFetched] = useState(false);

  const handleClick = () => {
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: { "X-Api-Key": APIkey },
      });
      const fullQuote = `${response.data[0].quote} - ${response.data[0].author}`;
      console.log(fullQuote);
      setQuote(fullQuote);
      setFetched(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className='random-quote-root'>
      <div className='random-quote-container'>
        {fetched ? (
          <div>
            <h4>{quote}</h4>
          </div>
        ) : (
          <button className='random-quote-btn' onClick={handleClick}>
            <p>CLICK FOR RANDOM ARCHITECTURE QUOTE</p>
          </button>
        )}
      </div>
    </div>
  );
};
export default RandomQuote;
