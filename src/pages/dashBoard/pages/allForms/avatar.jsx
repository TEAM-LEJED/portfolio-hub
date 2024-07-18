import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

const ProfileAvatar = ({ imageUrl, fullName }) => {
  // Determine initial based on fullName if imageUrl is not provided
  const initials = fullName
    ? fullName.split(' ').map(name => name[0]).join('').toUpperCase()
    : '';

  return (
    <Avatar
      alt={fullName}
      src={imageUrl}
      sx={{
        width: 150,
        height: 150,
        bgcolor:deepPurple[900]
      }}
    >
      {initials}
    </Avatar>
  );
}

export default ProfileAvatar;
