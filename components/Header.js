import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';

const Header = () => {
  return (
    <AppBar style={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap>
          <b>WhatBytes</b>
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" style={{ marginRight: '10px' }}>
            Rahil Siddique
          </Typography>
          <Avatar alt="Rahil Siddique" src="/static/images/avatar/1.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
