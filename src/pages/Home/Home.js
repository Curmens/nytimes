import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useState } from "react";
import {Typography, List, IconButton } from '@material-ui/core';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import nytimes from '../../assets/nytimes.png';
// CARDS
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    card:{
        width: '100%',
        // height: 150,
        boxShadow: 'None',
        backgroundColor: '#f5f5f5'
        // backgroundColor: '#f5f5f5'
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        placeContent: 'space-between',
        // width: '70%',
    },
    
    avatar: {
        width: 70,
        height: 70,
        // backgroundColor: '#C0CCC3',
        borderRadius: '50%', 
        margin: 'auto',
        marginLeft: 10,
        backgroundImage: `url(${nytimes})`
    },
    
    content:{
        justifyContent: 'space-between', 
        padding: 30,  
        maxWidth: 800, 
        marginBottom: 40
    },
    
    container: {
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '-3px 7px 20px -6px rgba(0,0,0,0.25)',
        placeContent: 'space-between',
        verticalAlign: 'middle',
        // height: 200,
        marginBottom: 20,
    },
    
    "@media (max-width: 600px)": {
        content:{
            padding: 10
        },

        container:{
            marginBottom: 20,
            padding: '0 20',
            width: '100%',
            // height: 150,
            boxShadow: '-3px 7px 20px -6px rgba(0,0,0,0.25)',
            backgroundColor: '#f5f5f5',
            borderRadius: 10
            // backgroundColor: '#f5f5f5'
        },
    }
}));


function Home() {
    const [articles, setArticles] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiKey = 'SXcNDrTLmJb2nZfYpDquoXOmGOy42SIy'

    useEffect(() => {
        try {
        const fetchArticles = async () => {
            const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${apiKey}`);
            const json = await response.json();
            setArticles(json.results);
            console.log(json.results);
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
                        <div className={classes.container} key={article.id}>
                            <img className={classes.avatar} src={nytimes} alt="nytimes"/>
                            {/* <div className={classes.avatar} style={{backgroundImage: `url(${nytimes})`}}></div> */}
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h6" component="h1" style={{width: '90%'}}>
                                        {article.title}
                                    </Typography>
                                    <div className={classes.row}>
                                        <Typography variant="body2" component="p" style={{marginRight: 20, width: '80%'}}>
                                            {article.byline}
                                        </Typography>
                                        <div style={{display:'flex', flexDirection: 'row', alignItems:'flex-end', justifyContent: 'center', width:150}}>
                                            <CalendarTodayIcon style={{ color: 'gray', marginRight: 5}}/>
                                            <Typography variant="body2" component="p">
                                                {article.updated.substr(0, 10)}
                                            </Typography>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )
                }   
                )}
            </List>
        </div>
    )
}

export default Home;