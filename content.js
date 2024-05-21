console.log("Content script chargé et prêt.");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getVideoUrl") {
        if (window.location.href.includes("watch?v=")) {
            sendResponse({url: window.location.href});
        } else {
            sendResponse({url: "No video URL found"});
        }
        if (request.action === "getVideoDetails") {
            const videoTitle = document.querySelector('h1.title').textContent; // Assurez-vous que le sélecteur est correct
            const videoUrl = window.location.href;
            sendResponse({title: videoTitle, url: videoUrl});
        }
    }
    return true; // Retourne true pour indiquer une réponse asynchrone
});
