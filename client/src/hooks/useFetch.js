import React, { useEffect, useState } from 'react'
import { makeRequest } from '../makeRequest/makeRequest';

const useFetch = (url) => { // here we used "ASYNC" twice, it gave us errors

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //refactoring our code base because we use useEffect a lot of times .....

    useEffect(() => {
        const fetchData = async () => { 
          try {
            setLoading(true)
            //   const res = await makeRequest.get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`, 
              const res = await makeRequest.get(url
            //     ,{
            //       headers: {
            //           Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            //       }
            //       // this is how we are fetching data using Strapi, without header API wont allow you to fetch data
            //   }
              );
  
              setData(res.data.data)
            //   console.log(res);
          } catch (error) {
            setError(true);
              console.log(error.response.data);
          }
          setLoading(false);
        };
        fetchData();
      }, [url]);

      return { data, loading, error };
}

export default useFetch