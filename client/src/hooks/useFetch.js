import React, { useEffect, useState } from 'react'
import { makeRequest } from '../makeRequest/makeRequest';

const useFetch = (url) => { // here we used "ASYNC" twice, it gave us errors

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //refactoring our code base because we use useEffect a lot of times .....

    useEffect(() => {
        const fetchData = async () => { 
     
   
      }, [url]);

}

