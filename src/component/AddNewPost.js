import React, { useState } from 'react'
import './AddNewPost.css'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import database from '../config';
import firebase from 'firebase';

function AddNewPost() {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [url, setUrl] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (name.trim() == '' || name == '' || post.trim() == '' || post == '') {

        }
        else {
            database.collection('posts').add({
                name,post,url, likes:0, timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        setUrl('')
        setPost('')
        setName('')
    }
    return (
        <Container maxWidth="sm">
            <form className="chatScreen__input" noValidate autoComplete="off">
                <TextField className="post__inputField" id="name-basic" label="Name" value={name} onChange={e => setName(e.target.value)} type="text" />
                <TextField className="post__inputField" id="post-basic" label="Tweet Post" value={post} onChange={e => setPost(e.target.value)} type="text" />
                <TextField className="post__inputField" id="name-basic" label="Add Photo url" value={url} onChange={e => setUrl(e.target.value)} type="text" />
                <Button className="post__button" variant="contained" color="primary" onClick={handleSend}>Tweet</Button>
            </form>
        </Container>
    )
}

export default AddNewPost
