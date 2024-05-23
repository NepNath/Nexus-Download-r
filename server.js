const express = require('express');
const youtubedl = require('youtube-dl-exec');
const cors =require('cors');
const { copyFileSync } = require('fs');

const app = express();
const port = 4000;

app.use(cors({
    origin: 'chrome-extension://dohbggmomelggkmmegdmmhjmbepdbfmd'
}));

app.get('/download-mp4', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('URL is required');
  }

  youtubedl(url, {
    format: 'bestvideo',
    dumpSingleJson: true,
    noWarnings: true,
    noCallHome: true,
    noCheckCertificate: true,
    preferFreeFormats: true,
    youtubeSkipDashManifest: true
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
        dumpSingleJson: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        preferFreeFormats: true,
        youtubeSkipDashManifest: true
      }).then(output => {
        res.json({ url: output.url, title: output.title });
      }).catch(err => {
        res.status(500).send('Failed to download video');
      });
    });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
