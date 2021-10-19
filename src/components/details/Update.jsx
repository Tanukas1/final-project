import {Box, makeStyles, formControl, InputBase,Button,TextareaAutosize } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons';


const useStyle = makeStyles(theme =>({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));

const Update = () => {
    const classes = useStyle();
    const url = 'https://media.istockphoto.com/photos/love-working-from-home-picture-id1182641010?b=1&k=20&m=1182641010&s=170667a&w=0&h=8vcHvvDfC7HnyZb24As-jdr7z8tNu8Xr5JJRvHYVXEw=';

    return (
       <Box className={classes.container}>
           <img className={classes.image} src={url} alt=""/>

           <formControl className={classes.form}>
               <AddCircle fontSize="large" color="action"/>  

               <InputBase placeholder='Title' className={classes.textfield}/>
               <Button variant="contained" color="primary">Update</Button>
           </formControl>

           <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
            />
       </Box>
    )
}
export default Update;