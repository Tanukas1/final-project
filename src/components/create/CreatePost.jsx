import {Box, makeStyles, formControl, InputBase,Button,TextareaAutosize } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons';
import { useState } from 'react';

import { createPost } from '../../service/api';

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

const intialValues ={
    title: '',
    description: '',
    picture: '',
    userName: 'codeforinterview',
    categories: 'All',
    createDate: new Date()
}
const CreatePost = () => {
    const classes = useStyle();
    const url = 'https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png';

    const[post,setPost] = useState(intialValues);

    const handleChange = (e) => {
        setPost({...post,[e.target.name]: e.target.value})
    }
    const savePost = async() =>{
      await  createPost(post);
    }

    return (
       <Box className={classes.container}>
           <img className={classes.image} src={url} alt=""/>

           <formControl className={classes.form}>
               <AddCircle fontSize="large" color="action"/>  

               <InputBase 
               onChange={(e) => handleChange(e)}
               placeholder='Title' 
               className={classes.textfield}
               name='title'
               />
               <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
           </formControl>

           <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                onChange={(e) => handleChange(e)}
                name='description'
            />
       </Box>
    )
}
export default CreatePost;