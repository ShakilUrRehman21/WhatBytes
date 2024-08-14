"use client";  // Ensures the component is treated as a Client Component

import { Box, Paper, Typography, Button, LinearProgress, Grid, Dialog, DialogTitle, DialogContent, TextField, DialogActions, CircularProgress } from '@mui/material';
import { useState } from 'react';
import PieChartIcon from '@mui/icons-material/PieChart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [rank, setRank] = useState('');
  const [percentile, setPercentile] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState('');
  const [rankError, setRankError] = useState('');
const [percentileError, setPercentileError] = useState('');
const [correctAnswersError, setCorrectAnswersError] = useState('');

  const [graphData, setGraphData] = useState([
    { name: '0', value: 5 },
    { name: '25', value: 30 },
    { name: '50', value: 60 },
    { name: '75', value: 90 },
    { name: '100', value: 4 },
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleRankChange = (e) => {
    const value = e.target.value;
    setRank(value);
    if (value < 1) {
      setRankError("Rank must be 1 or higher");
    } else {
      setRankError("");
    }
  };

  const handlePercentileChange = (e) => {
    const value = e.target.value;
    setPercentile(value);
    if (value > 100) {
      setPercentileError("Percentile cannot exceed 100%");
    } else {
      setPercentileError("");
    }
  };

  const handleCorrectAnswersChange = (e) => {
    const value = e.target.value;
    setCorrectAnswers(value);
    if (value > 15) {
      setCorrectAnswersError("Correct Answers cannot exceed 15");
    } else {
      setCorrectAnswersError("");
    }
  };
  const handleUpdate = () => {
    if (percentile > 100) {
      alert("Percentile cannot exceed 100%");
      return;
    }
    if (correctAnswers > 15) {
      alert("Correct Answers cannot exceed 15");
      return;
    }

    // Update the graph data (Optional: You can customize the data update logic)
    const newGraphData = [
      { name: '0', value: percentile || 5 },
      { name: '25', value: 30 },
      { name: '50', value: 60 },
      { name: '75', value: 90 },
      { name: '100', value: 4 },
    ];

    setGraphData(newGraphData);
    setOpen(false);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '64px', marginLeft:'240px' }}>
      <Typography variant="body2" style={{ marginBottom: '30px', color:'black' }}>
        <b>Skill Test</b>
      </Typography>
      <Grid container spacing={2}>
        {/* Left Column */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <img src="/static/images/html.png" alt="HTML Icon" width="100px" height="100px" style={{ marginRight: '20px' }} />
            <div style={{ flexGrow: 1 }}>
            <Typography variant="body2">
                <b>Hyper Text Markup Language</b>
              </Typography><br/>
              <Typography variant="body2">
                Questions: 08 | Duration: 15 mins | Submitted on 14 August 2024
              </Typography>
            </div>
            <Button variant="contained" color="primary" onClick={handleClickOpen} style={{marginRight:'20px'}}>
              Update
            </Button>
          </Paper>

          {/* Quick Statistics */}
          <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="h6"><b>Quick Statistics</b></Typography><br/>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                <img src="/static/images/trophy.png" alt="Rank" width="40px" height="40px" style={{ marginRight: '10px' , marginLeft:'15px'}} />
                <Typography variant="body2" style={{marginRight:'25px'}}><b>{rank ? `${rank} YOUR RANK` : "1 YOUR RANK"}</b><br/></Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                <img src="/static/images/percentile.png" alt="Percentile" width="40px" height="40px" style={{ marginRight: '10px' }} />
                <Typography variant="body2" style={{marginRight:'25px'}}><b>{percentile ? `${percentile}% PERCENTILE` : "30% PERCENTILE"}</b><br/></Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/static/images/tick.png" alt="Correct Answers" width="40px" height="40px" style={{ marginRight: '10px' }} />
                <Typography variant="body2" ><b>{correctAnswers ? `${correctAnswers}/15 CORRECT ANSWERS` : "10/15 CORRECT ANSWERS"}</b><br/></Typography>
              </div>
            </div>
          </Paper>

          {/* Comparison Graph */}
          <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="h6"><b>Comparison Graph</b></Typography>
            <Typography variant="body2" style={{ marginTop: '10px', textAlign: 'center' }}>
              <b>You scored {percentile || 67}% percentile,</b> which is lower than the average percentile {70}% of all engineers who took the assessment.
            </Typography><br/>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" label={{position: 'insideBottomRight', offset: -5 }} />
                <YAxis label={{ angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4}>
      <Paper elevation={3} style={{ height: 'auto', padding: '20px', marginBottom: '20px', borderRadius: '15px' }}>
        <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '15px' }}>Syllabus Wise Analysis</Typography>
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Typography variant="body2" style={{ flex: 1 }}>HTML Tools, Forms, History</Typography>
          <Typography variant="body2" style={{ color: '#3f51b5', fontWeight: 'bold', marginLeft: '10px'}}>80%</Typography>
        </div>
        <LinearProgress variant="determinate" value={80} style={{ height: '8px', backgroundColor: '#e3f2fd', marginBottom: '15px' , borderRadius:'15px'}} color="primary" />
        <br/>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Typography variant="body2" style={{ flex: 1 }}>Tags & References in HTML</Typography>
          <Typography variant="body2" style={{ color: '#f57c00', fontWeight: 'bold', marginLeft: '10px' }}>60%</Typography>
        </div>
        <LinearProgress variant="determinate" value={60} style={{ height: '8px', backgroundColor: '#ffe0b2', marginBottom: '15px' , borderRadius:'15px'}} color="secondary" />
        <br/>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Typography variant="body2" style={{ flex: 1 }}>Tables & References in HTML</Typography>
          <Typography variant="body2" style={{ color: '#f44336', fontWeight: 'bold', marginLeft: '10px' }}>24%</Typography>
        </div>
        <LinearProgress variant="determinate" value={24} style={{ height: '8px', backgroundColor: '#ffcdd2', marginBottom: '15px' , borderRadius:'15px'}} color="error" />
        <br/>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Typography variant="body2" style={{ flex: 1 }}>Tables & CSS Basics</Typography>
          <Typography variant="body2" style={{ color: '#4caf50', fontWeight: 'bold', marginLeft: '10px' }}>96%</Typography>
        </div>
        <LinearProgress variant="determinate" value={96} style={{ height: '8px', backgroundColor: '#c8e6c9' , borderRadius:'15px'}} color="success" />
        <br/>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', borderRadius: '15px' }}>
  <Typography variant="h6"><b>Question Analysis</b></Typography>
  <Typography variant="body2"><br/>
    <b>You scored {correctAnswers || 10} questions correct out of 15.</b> However, it still needs some improvements.
  </Typography><br/>
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px', marginTop: '20px' }}>
    <Box sx={{ position: 'relative' }}>
      <CircularProgress variant="determinate" value={correctAnswers ? (correctAnswers / 15) * 100 : 67} color="primary" size={100} thickness={5} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${correctAnswers ? correctAnswers : 10}/15`}</Typography>
      </Box>
    </Box>
  </Box>
</Paper>

        </Grid>
      </Grid>

      {/* Dialog for updating values */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><b>Update Scores</b></DialogTitle>
        <Box display="flex" alignItems="center" marginBottom={2} marginRight={2}>
      <Typography style={{ marginRight: '162.5px', marginLeft:'20px' }}>1. Update your <b>Rank</b></Typography>
      <TextField
  autoFocus
  margin="dense"
  id="rank"
  label="Rank"
  type="number"
  value={rank}
  onChange={handleRankChange}
  error={!!rankError}
  helperText={rankError}
/>
    </Box>
    <Box display="flex" alignItems="center" marginBottom={2}>
      <Typography style={{ marginRight: '124.5px' , marginLeft:'20px'}}>2. Update your <b>Percentile</b></Typography>
      <TextField
  margin="dense"
  id="percentile"
  label="Percentile"
  type="number"
  value={percentile}
  onChange={handlePercentileChange}
  error={!!percentileError}
  helperText={percentileError}
/>
    </Box>
    <Box display="flex" alignItems="center" marginBottom={2}>
      <Typography style={{ marginRight: '10px' , marginLeft:'20px'}}>3. Update your <b>Current Score (out of 15)</b></Typography>
      <TextField
  margin="dense"
  id="correctAnswers"
  label="Correct Answers"
  type="number"
  value={correctAnswers}
  onChange={handleCorrectAnswersChange}
  error={!!correctAnswersError}
  helperText={correctAnswersError}
/>
    </Box>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="grey">
            Cancel
          </Button>
          <Button onClick={handleUpdate} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Dashboard;
