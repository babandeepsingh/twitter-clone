import React, { useState, useEffect } from 'react'
import database from '../config';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
function UserPosts() {
    const [userPosts, setUserPosts] = useState([

    ])
    useEffect(() => {
        const unsubscribe = database.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setUserPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })))
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <div>
            <h4>Latest Tweets</h4>
            <Container maxWidth="sm">
                <List>
                    {userPosts.map((post, index) => (
                        <>
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar className="chat__image" alt={post.post.name} src={post.post.url} />
                                </ListItemAvatar>
                                <ListItemText primary={post.post.name} secondary={post.post.post} />
                                <Button onClick={event =>database.collection('posts').doc(post.id).set({
                                    name:post.post.name,
                                    post:post.post.post,
                                    url:post.post.url,
                                    likes: post.post.likes++, 
                                    timestamp:post.post.timestamp
                                    }) }><FavoriteIcon color="secondary"/> <b>{post.post.likes}</b></Button>
                            </ListItem>
                            <Divider key={post.post.name} variant="inset" component="li" />
                        </>
                    ))}
                </List>
                <List>

                </List>
            </Container>
        </div>
    )
}

export default UserPosts
