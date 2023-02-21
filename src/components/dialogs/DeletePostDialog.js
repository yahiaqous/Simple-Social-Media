/** @format */

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

export default function DeletePostDialog(props) {
  function deletePost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.postData?.id}`, {
      method: 'DELETE',
    }).then(() => {
      props.setPostsData(
        props.postsData.filter((item) => item.id !== props.postData?.id)
      );

      props.setShowDeletePostDialog(false);
    });
  }

  return (
    <Dialog
      open={props.showDeletePostDialog}
      onClose={() => props.setShowDeletePostDialog(false)}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>
        Are you sure you want to delete the post?
      </DialogTitle>

      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {props.postData.title}
        </DialogContentText>
      </DialogContent>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {props.postData.body}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => props.setShowDeletePostDialog(false)}>
          Cancel
        </Button>
        <Button onClick={deletePost} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
