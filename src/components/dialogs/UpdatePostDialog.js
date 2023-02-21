/** @format */

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';

export default function UpdatePostDialog(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/posts/${props.postData?.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: props.postData?.id,
        title: document.getElementById('post-title').value,
        body: document.getElementById('post-body').value,
        userId: props.postData?.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        let newArr = [...props.postsData];
        newArr[props.postData?.id - 1] = json;
        props.setPostsData(newArr);

        props.setShowUpdatePostDialog(false);
      });
  }

  return (
    <Dialog
      open={props.showUpdatePostDialog}
      onClose={() => props.setShowUpdatePostDialog(false)}
      fullScreen={fullScreen}
      aria-labelledby='responsive-dialog-title'>
      <DialogTitle id='responsive-dialog-title'>Edit Your Post</DialogTitle>

      <form onSubmit={(e) => handleSubmit(e)}>
        <DialogContent>
          <DialogContentText>Share what is in your mind!</DialogContentText>

          <Box
            component='form'
            sx={{
              '& .MuiTextField-root': { m: 1, minWidth: '60ch' },
            }}
            noValidate
            autoComplete='off'>
            <TextField
              autoFocus
              required
              id='post-title'
              label='Post Title'
              type='text'
              fullWidth
              variant='standard'
              defaultValue={props.postData?.title}
            />

            <TextField
              rows={4}
              required
              id='post-body'
              label='Type something...'
              type='text'
              fullWidth
              variant='outlined'
              placeholder='Type anything…'
              defaultValue={props.postData?.body}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => props.setShowUpdatePostDialog(false)}>
            Cancel
          </Button>
          <Button type='submit'>Update</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
