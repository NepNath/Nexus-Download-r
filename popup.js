console.log("popup script chargé et prêt.");

function fetchVideoUrl(callback) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "getVideoUrl"}, function(response) {
            if (chrome.runtime.lastError) {
                console.log("Erreur de communication avec le content script:", chrome.runtime.lastError.message);
                callback(null);
            } else if (response) {
                console.log('URL récupérée :', response.url);  // Log de l'URL récupérée
                callback(response.url);
            } else {
                console.log("Aucune réponse du content script.");
                callback(null);
            }
        });
    });
}

function fetchVideoInfo(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "getVideoDetails"}, function(response) {
            if (response) {
                document.getElementById('videoTitle').textContent = response.title;
                console.log("titre récupéré : ", response.title)
                document.getElementById('videoURL').textContent = response.url;
            }
        });
    });
}

document.getElementById('download-mp3').addEventListener('click', function() {
    fetchVideoUrl(function(url) {
        if (url) {
            console.log('Téléchargement MP3 de : ' + url);
            // Logique de téléchargement MP3 ici
        } else {
            console.log('Aucune vidéo valide trouvée.');
        }
    });
});

document.getElementById('download-mp4').addEventListener('click', function() {
    fetchVideoUrl(function(url) {
        if (url) {
            console.log('Téléchargement MP4 de : ' + url);
            // Logique de téléchargement MP4 ici
        } else {
            console.log('Aucune vidéo valide trouvée.');
        }
    });
});