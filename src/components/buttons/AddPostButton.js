/** @format */

import { Button } from '@mui/material';

export default function AddPostButton(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'end' }}>
      <Button
        variant='contained'
        size='large'
        style={{ position: 'fixed' }}
        onClick={() => props.setShowAddPostDialog(!props.showAddPostDialog)}>
        + Add Post
      </Button>
    </div>
  );
}
