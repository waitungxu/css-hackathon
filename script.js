document.getElementById('urlForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const urlInput = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
  
    // Simulate URL shortening
    simulateShortenUrl(urlInput)
      .then((shortUrl) => {
        resultDiv.innerHTML = `Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
      })
      .catch((error) => {
        resultDiv.innerHTML = `Error: ${error.message}`;
      });
  });
  
  // Simulate a URL shortening function
  function simulateShortenUrl(longUrl) {
    return new Promise((resolve, reject) => {
      if (!longUrl) {
        reject(new Error('Please enter a valid URL.'));
        return;
      }
  

  localStorage.setItem(longUrl, shortUrl);

  document.getElementById('urlForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const urlInput = document.getElementById('urlInput').value;
    const customShortLink = document.getElementById('customShortLink').value;
    const resultDiv = document.getElementById('result');
  
    // Call the backend API
    shortenUrl(urlInput, customShortLink)
      .then((shortUrl) => {
        resultDiv.innerHTML = `Shortened URL: <a href="${short.url}" target="_blank">${shortUrl}</a>`;
      })
      .catch((error) => {
        resultDiv.innerHTML = `Error: ${error.message}`;
      });
  });
  
  const Url = localStorage.getItem (longUrl);
  window.location.replace(longUrl);

 