import React, {useState} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
const axios = require("axios");


const Jesus = () => {
    const [search, setSearch] = useState("");
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchChange = e => {
        setSearch(e.target.value);
    };

    const getArticles = () => {
        const ROOT_ADDR = `http://localhost:3000/jesus?q=${encodeURI(search)}`;
        setIsLoading(true);
        axios.get(ROOT_ADDR)
        .then((result) => {
            console.log(result);
            if (result.data.succ) {
                // check to see operation succeeded
                displaySearch(result.data.content.response.docs);
            }
        });
    }
    
    const displaySearch = (data) => {
        console.log(data);
        let toDisplay = [];

        if (data.length===0){
            toDisplay = (
                <div>
                    <h3>Sorry, not articles found for the search '{search}'</h3>
                </div>
            )
        } else{
            // iterate through listings and create row for each
            for (let i = 0; i < data.length; i++) {
                toDisplay[i] = (
                    <div key={i}>
                        <h5>{data[i].headline.main}</h5>
                        <p>{data[i].abstract}</p>
                        <hr/>
                    </div>
                )
            }
            
        }



        setArticles(toDisplay);
        
        setIsLoading(false);
    };

    return (
        <div>
            <h1>Welcome to the Jesus page</h1>
            <p>Search for any article in the New York Times news</p>
            <div className='container'>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" id="search" onChange={searchChange}/>
                <Button variant="outline-success" onClick={getArticles} >Search</Button>
            </Form>
            </div>
            <hr/>
            {
                isLoading &&
                (
                    <h3>Loading articles ...</h3>
                )
            }
                {articles}
        </div>
    );
}

export default Jesus;