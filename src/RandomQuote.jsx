import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://api.api-ninjas.com/v1/quotes?category=architecture";
const APIkey = "0OQRA9qgx+QkPZCBJ9zGOg==7ggTuEHBYeDIAc3x";

const RandomQuote = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: { "X-Api-Key": APIkey },
      });
      const fullQuote = `${response.data[0].quote} - ${response.data[0].author}`;
      setQuote(fullQuote);
    } catch (error) {
      console.log(error.response);
    }
  };
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  return <div className='random-quote-container'>{quote}</div>;
};
export default RandomQuote;
