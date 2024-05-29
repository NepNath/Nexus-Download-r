// Écouteur pour le bouton de téléchargement MP4
document.getElementById('download-mp4').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let url = tabs[0].url;
    if (url.includes("youtube.com/watch?v=")) {
      fetch(`http://localhost:4000/download-mp4?url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(json => {
          if (json.url && json.title) {
            document.getElementById('title').textContent = json.title;
            fetch(json.url)
              .then(response => response.blob())
              .then(blob => {
                const blobUrl = URL.createObjectURL(blob);
                const downloadLink = document.createElement('a');
                downloadLink.href = blobUrl;
                downloadLink.download = json.title.replace(/[^a-zA-Z0-9]/g, '_');
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                URL.revokeObjectURL(blobUrl);  // Clean up
              });
          } else {
            console.error('No URL or title in response:', json);
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
        fetch(`http://localhost:4000/download-mp3?url=${encodeURIComponent(url)}`)
          .then(response => {
            if (!response.ok) {
              console.log(response)
              throw new Error('Failed to start download');
            }
            return response.json();
          })
          .then(json => {
            if (json.url && json.title) {
              document.getElementById('title').textContent = json.title; 
              const a = document.createElement('a');
              a.href = json.url;
              a.download = json.title.replace(/[^a-zA-Z0-9]/g, '_'); 
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            } else {
              console.error('No URL or title in response:', json);
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