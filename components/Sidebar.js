"use client";

import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkIcon from '@mui/icons-material/Work';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div style={{ width: '240px', backgroundColor: '#f7f8fa', padding: '20px', height: '100vh', marginTop: '60px', position: 'fixed', top: 0 }}>
      <List>
        <ListItem
          button
          onClick={() => setActiveItem('Dashboard')}
          style={{ color: activeItem === 'Dashboard' ? 'blue' : 'black' }}
        >
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          onClick={() => setActiveItem('Skill Test')}
          style={{ color: activeItem === 'Skill Test' ? 'blue' : 'black' }}
        >
          <ListItemIcon><AssessmentIcon /></ListItemIcon>
          <ListItemText primary="Skill Test" />
        </ListItem>
        <ListItem
          button
          onClick={() => setActiveItem('Internship')}
          style={{ color: activeItem === 'Internship' ? 'blue' : 'black' }}
        >
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText primary="Internship" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
