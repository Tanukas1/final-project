import {Box, makeStyles, formControl, InputBase,Button,TextareaAutosize } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons';
import { Formik } from 'formik';
import { useState } from 'react';
import app_config from '../../config';

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
    const [blogvalue, setblogValue] = useState("**Hello world!!!**");
    const api_url = app_config.api_url;

    const handleChange = (e) => {
        setPost({...post,[e.target.name]: e.target.value})
    }
    const savePost = async() =>{
      await  createPost(post);
    }

    const blogForm = {
        title: "",
        description: "",
        image: "",
        data: "",
      };
    
      const addBlog = (values) => {
        values.image = thumbnail;
        values.data = blogvalue;
        console.log(values);
        fetch(url + "/blog/add", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      };

    return (
       <Box className={classes.container}>
           <img className={classes.image} src={url} alt=""/>

           <Formik initialValues={blogForm} onSubmit={blo}>

           </Formik>
       </Box>
    )
}
export default CreatePost;