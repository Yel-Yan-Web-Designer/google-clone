import React,{useState, useEffect} from 'react';
import API_KEY from './apiKeys';

// THIS KEY TELL GOOGLE WHICH SEARCH ENGINE TO USE
const CONTEXT_KEYS = '0727443fb2a1d4ec2';

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    // console.log(data)

    useEffect(()=> {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEYS}&q=${term}`
                )
                .then(response => response.json())
                .then(result => {
                    setData(result);
                })
            }
        fetchData();
    }, [term])

    return {data}; // return as an object if we want to write js code in jsx
}

export default useGoogleSearch;