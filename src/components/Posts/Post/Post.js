import React from "react";
import './styles.css'
import { Card,CardActions, CardContent, CardMedia, Button, Typography} from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment'
import {useDispatch} from "react-redux"
import {deletePosts, likePosts} from '../../../actions/posts'

const Post = ({post, setCurrentId}) =>{
    
 const dispatch = useDispatch()
  
   return (
      <Card className="card">
          <CardMedia className="media" image={post.selectedFile} title={post.title}/>
            <div className="overlay">
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className="overlay2">
                <Button style={{color:"white"}} size="small" onClick={()=>setCurrentId(post._id)}>
                   <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className="details">
              <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`# ${tag} `)}</Typography>
            </div>
            <Typography className="title"  variant="h5" gutterBottom>{post.title}</Typography>

            <CardContent>
                <Typography  color="textSecondary" component="p" variant="body2" >{post.message}</Typography>
            </CardContent>

            <CardActions className="cardActions">
                <Button size="small" color="primary" onClick={() => dispatch(likePosts(post._id))}>
                    <ThumbUpAltIcon fontSize="small"/>
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePosts(post._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>

      </Card>
   )
}


export default Post;