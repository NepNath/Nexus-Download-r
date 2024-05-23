const express = require('express');
const youtubedl = require('youtube-dl-exec');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors({
  origin: 'chrome-extension://opnlomakpnoffilmacbapoefgplmjoab'
}));

app.get('/download-mp4', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('URL is required');
  }

  youtubedl(url, {
    format: 'bestvideo+bestaudio',
    mergeOutputFormat: 'mp4'
  }).then(output => {
    res.json({ url: output.url, title: output.title });
  }).catch(err => {
    res.status(500).send('Failed to download video');
  });
});

app.get('/download-mp3', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('URL is required');
  }

  youtubedl(url, {
    format: 'bestaudio',
    extractAudio: true,
    audioFormat: 'mp3'
  }).then(output => {
    res.json({ url: output.url, title: output.title });
  }).catch(err => {
    res.status(500).send('Failed to download audio');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
