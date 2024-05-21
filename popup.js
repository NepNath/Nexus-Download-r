document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('download-mp4').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let url = tabs[0].url;
        if (url.includes("youtube.com/watch?v=")) {
          // appeler API pour télécharger
          alert("URL YouTube détectée : " + url);
        } else {
          alert("L'URL n'est pas une URL YouTube.");
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('download-mp3').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let url = tabs[0].url;
        if (url.includes("youtube.com/watch?v=")) {
          //appeler API pour télécharger
          alert("URL YouTube détectée : " + url);
        } else {
          alert("L'URL n'est pas une URL YouTube.");
        }
      });
    });
  });
  
  