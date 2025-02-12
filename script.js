document.getElementById('urlForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const urlInput = document.getElementById('urlInput').value.trim();
    const customShortLink = document.getElementById('customShortLink').value.trim();
    const resultDiv = document.getElementById('result');

    shortenUrl(urlInput, customShortLink)
        .then((shortUrl) => {
            resultDiv.innerHTML = `Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
            displaySavedLinks(); // Refresh saved links
        })
        .catch((error) => {
            resultDiv.innerHTML = `Error: ${error.message}`;
        });
});

function shortenUrl(longUrl, customShortLink) {
    return new Promise((resolve, reject) => {
        if (!longUrl) {
            reject(new Error('Please enter a valid URL.'));
            return;
        }

        let savedUrls = JSON.parse(localStorage.getItem("s  hortenedUrls")) || {};

        // Use custom short link if provided, otherwise generate a random one
        let shortCode = customShortLink || Math.random().toString(36).substring(7);

        // Prevent duplicate custom short links
        if (customShortLink && savedUrls[customShortLink]) {
            reject(new Error('Custom short link already exists! Choose another one.'));
            return;
        }

        savedUrls[shortCode] = longUrl;
        localStorage.setItem("shortenedUrls", JSON.stringify(savedUrls));

        resolve(`${window.location.origin}/${shortCode}`);
    });
}

// Function to display saved shortened links
function displaySavedLinks() {
    const savedUrls = JSON.parse(localStorage.getItem("shortenedUrls")) || {};
    const resultDiv = document.getElementById("result");
    
    let savedLinksHTML = "<h3>Saved Links</h3><ul>";
    for (const [shortCode, longUrl] of Object.entries(savedUrls)) {
        savedLinksHTML += `<li><a href="${longUrl}" target="_blank">${window.location.origin}/${shortCode}</a> - ${longUrl}</li>`;
    }
    savedLinksHTML += "</ul>";

    resultDiv.innerHTML += savedLinksHTML;
}

// Load saved links on page load
document.addEventListener("DOMContentLoaded", displaySavedLinks);
