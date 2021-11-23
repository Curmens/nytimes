import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useState } from "react";
import { List } from '@material-ui/core';
import NewsCard from "./components/NewsCard/NewsCard";

const useStyles = makeStyles((theme) => ({
    content:{
        justifyContent: 'space-between', 
        padding: 30,  
        maxWidth: 800, 
        marginBottom: 40
    },
    
    "@media (max-width: 600px)": {
        content:{
            padding: 10
        }
    }
}));


function Home() {
    const [articles, setArticles] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const apiKey = 'SXcNDrTLmJb2nZfYpDquoXOmGOy42SIy'

    useEffect(() => {
        try {
        const fetchArticles = async () => {
            const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${apiKey}`);
            const json = await response.json();
            setArticles(json.results);
            setIsLoading(false);
        }
        fetchArticles();
        } catch (error) {
        console.log(error);
        }
    }, [])
    const classes = useStyles();

    return (
        <div style={{backgroundColor: '#f5f5f5',alignItems: 'center', display:'flex', flexDirection: 'column'}} className='margin: auto'>

            <List className={classes.content}>
                {articles.map((article) => {
                    return (
                        <NewsCard article={article} />
                    )
                })}
            </List>
        </div>
    )
}

export default Home;