import React from "react";
import { Box, makeStyles, Typography, } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Delete, Edit } from '@material-ui/icons';


const useStyle = makeStyles(theme =>({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        border: '1px solid #878787',
        borderRadius: 1
    },
    heading: {
        fontSize: 40,
        fontWeight: 600,
        textAlign : 'center' ,
        margin: '50px 0 10px 0'
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
    }
}));
const DetailView = ()=>{
    const classes = useStyle();
    const url = 'https://www.browsewire.net/wp-content/uploads/2017/11/blog-img.jpg';

    return(
        <Box className={classes.container}>
            <img src={url} alt="" className={classes.image} />
            <Box className={classes.icons}>
                <Link to='./update'><Edit className={classes.icon} color={'primary'}/></Link>
                <Delete className={classes.icon} color={'error'}/>
            </Box>
            <Typography className={classes.heading}>Travel blog</Typography>
            
            <Box className={classes.subheading}>
                <Typography>Author:<span style={{fontweight: 600}}>Author Name</span></Typography>
                <Typography style={{marginLeft: 'auto'}}>10 september 2021</Typography>
            </Box>
            <Typography>Before planning a trip, we tend to do a lot of research on both Google and social media. Therefore, the demand for reading other people's travel reviews is high. If you’re a globetrotter, consider this type of outlet. You can start with an insider’s guide on places to explore near you, offering reasons to visit your very own hometown, region or country.
We recommend honing in on a travel niche, whether it’s a type of hotel (luxury hotels, hostels, etc.), a kind of trip (backpacking, camping, etc.) or a geographical area. For instance, the blogger behind Tales Of Israel shares inspiring guides focusing only on the Holy Land. This makes her an expert and a trustworthy source to readers.</Typography>
        </Box>
        
    )
}
export default DetailView;