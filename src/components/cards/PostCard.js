/** @format */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import {
  styled,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import CommentCard from './CommentCard';
import UpdatePostDialog from '../dialogs/UpdatePostDialog';
import DeletePostDialog from '../dialogs/DeletePostDialog';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard(props) {
  useEffect(() => {
    getCommentsData(props.postData?.id);
  }, []);

  const [commentsData, setCommentsData] = useState([]);
  function getCommentsData(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((json) => setCommentsData(json));
  }

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [showUpdatePostDialog, setShowUpdatePostDialog] = useState(false);
  const [showDeletePostDialog, setShowDeletePostDialog] = useState(false);

  return (
    <>
      {showUpdatePostDialog && (
        <UpdatePostDialog
          showUpdatePostDialog={showUpdatePostDialog}
          setShowUpdatePostDialog={setShowUpdatePostDialog}
          postData={props.postData}
          postsData={props.postsData}
          setPostsData={props.setPostsData}
        />
      )}

      {showDeletePostDialog && (
        <DeletePostDialog
          showDeletePostDialog={showDeletePostDialog}
          setShowDeletePostDialog={setShowDeletePostDialog}
          postData={props.postData}
          postsData={props.postsData}
          setPostsData={props.setPostsData}
        />
      )}

      <Card
        style={{
          width: '60%',
          margin: 'auto',
          marginBottom: '50px',
          border: '5px black',
        }}>
        <CardHeader
          title={props.postData?.title}
          subheader={
            props.usersData?.find((user) => user.id === props.postData?.userId)
              ?.username +
            '. ' +
            props.usersData?.find((user) => user.id === props.postData?.userId)
              ?.email
          }
        />

        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {props.postData?.body}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          {/* Update Post Button */}
          <IconButton onClick={() => setShowUpdatePostDialog(true)}>
            <EditOutlinedIcon />
          </IconButton>

          {/* Delete Post Button */}
          <IconButton onClick={() => setShowDeletePostDialog(true)}>
            <DeleteOutlineOutlinedIcon color='warning' />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>Comments</Typography>

            {commentsData.map((commentData, idx) => (
              <CommentCard commentData={commentData} key={idx} />
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
