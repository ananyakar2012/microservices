const express = require('express');
const axios = require('axios');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();


app.get('/', (req, res) => {
  const searchUrl = `https://api.github.com/users`;
  axios.get(searchUrl).then(response => {
    const responseJSON = response.data;
    return res.status(200).json({ source: 'Docker Microservice', ...responseJSON, });
  })
  .catch(err => {
    return res.json(err);
  });
  
});

app.get('/:login', (req, res) => {
  const loginId = req.params.login
  
  const searchUrl = `https://api.github.com/users/${loginId}`;
  axios.get(searchUrl).then(response => {
    const responseJSON = response.data;
    return res.status(200).json({ source: 'Docker Microservice', ...responseJSON, });
  })
  .catch(err => {
    return res.json(err);
  });
  
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);