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

export default function AddPostDialog(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  function handleSubmit(e) {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: document.getElementById('post-title').value,
        body: document.getElementById('post-body').value,
        userId: props.userDetails?.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        props.setPostsData((old) => [...old, json]);
        props.setShowAddPostDialog(false);
      })
      .then(() =>
        // Navigate to the Page End
        props.navigateBottom()
      );
  }

  return (
    <Dialog
      open={props.showAddPostDialog}
      onClose={() => props.setShowAddPostDialog(false)}
      fullScreen={fullScreen}
      aria-labelledby='responsive-dialog-title'>
      <DialogTitle id='responsive-dialog-title'>Add New Post</DialogTitle>

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
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => props.setShowAddPostDialog(false)}>
            Cancel
          </Button>
          <Button type='submit'>Post</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
