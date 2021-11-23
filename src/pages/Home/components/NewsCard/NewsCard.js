import { makeStyles } from "@material-ui/core/styles";
import {Typography } from '@material-ui/core';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import nytimes from '../../../../assets/nytimes.png';
// CARDS
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    card:{
        width: '100%',
        boxShadow: 'None',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    
    row: {
        display: 'flex',
        flexDirection: 'row',
        placeContent: 'space-between',
    },
    
    avatar: {
        width: 70,
        height: 70,
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
        marginBottom: 20,
        cursor: 'pointer',
        textDecoration: 'none',
        borderRadius: 10,
    },

    "@media (max-width: 600px)": {
        content:{
            padding: 10
        },

        container:{
            marginBottom: 20,
            padding: '0 20',
            width: '100%',
            boxShadow: '-3px 7px 20px -6px rgba(0,0,0,0.25)',
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
        },
    }
}));



export default function NewsCard(props) {
    const classes = useStyles();
    return (
        <a className={classes.container} key={props.article.id} href={props.article.url}>
            <img className={classes.avatar} src={nytimes} alt="nytimes"/>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" component="h1" style={{width: '90%'}} id="title" className="title">
                        {props.article.title}
                    </Typography>
                    <div className={classes.row}>
                        <Typography variant="body2" id="byline" component="p" style={{marginRight: 20, width: '80%'}} className="byline">
                            {props.article.byline}
                        </Typography>
                        <div style={{display:'flex', flexDirection: 'row', alignItems:'flex-end', justifyContent: 'center', width:150}}>
                            <CalendarTodayIcon style={{ color: 'gray', marginRight: 5}}/>
                            <Typography variant="body2" component="p" id="published_date" className="data_time">
                                {props.article.published_date}
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </a>
    );
}