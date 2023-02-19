/** @format */

import { CardHeader, CardContent, Typography } from '@mui/material';

export default function CommentCard(props) {
  return (
    <div style={{ width: '80%', margin: 'auto', marginBottom: '25px' }}>
      <CardHeader
        title={props.commentData?.name}
        subheader={props.commentData?.email}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {props.commentData?.body}
        </Typography>
      </CardContent>
    </div>
  );
}
