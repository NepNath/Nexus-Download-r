document.addEventListener('DOMContentLoaded', function() {
  // Écouteur pour le bouton de téléchargement MP4
  document.getElementById('download-mp4').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      let url = tabs[0].url;
      if (url.includes("youtube.com/watch?v=")) {
        alert("URL YouTube détectée : " + url);
        fetch(`http://localhost:4000/download-mp4?url=${encodeURIComponent(url)}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to start download');
            }
            return response.json();
          })
          .then(json => {
            console.log(json); // Log pour déboguer la réponse
            if (json.url) {
              window.open(json.url, '_blank');
            } else {
              console.error('No URL in response:', json);
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } else {
        alert("L'URL n'est pas une URL YouTube.");
      }
    });
  });

  // Écouteur pour le bouton de téléchargement MP3
  document.getElementById('download-mp3').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      let url = tabs[0].url;
      if (url.includes("youtube.com/watch?v=")) {
        alert("URL YouTube détectée : " + url);
        fetch(`http://localhost:4000/download-mp3?url=${encodeURIComponent(url)}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to start download');
            }
            return response.json();
          })
          .then(json => {
            console.log(json); // Log pour déboguer la réponse
            if (json.url) {
              window.open(json.url, '_blank');
            } else {
              console.error('No URL in response:', json);
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } else {
        alert("L'URL n'est pas une URL YouTube.");
      }
    });
  });
});
  

  
  document.getElementById('download-mp4').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const url = tabs[0].url;
      if (url.includes("youtube.com")) {
      } else {
        alert("L'URL n'est pas une URL YouTube.");
      }
    });
  });
  