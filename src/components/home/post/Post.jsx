import {Box, Typography,  makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        height: 350,
        margin: 10,
        borderRadius: 10,
        border: '1px solid #d3cede',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        height: 200,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    }
})

const Post = () => {
    const classes = useStyle();
    const url = 'https://image.shutterstock.com/image-photo/comfortable-workplace-mood-board-room-600w-1527055046.jpg';
    return (
        <Box className={classes.container}>
         <img src={url} alt="wrapper" className={classes.image}/>
         <Typography className={classes.text}>All categories</Typography>
         <Typography className={classes.heading}>Lifestyle Blog</Typography>
         <Typography className={classes.text}>Author:</Typography>
         <Typography className={classes.detail}>Lifestyle blogs are the most popular type of blogs you can find online.</Typography>
        </Box>
        
       
    )
}
export default Post;