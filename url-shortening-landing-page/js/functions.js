// display the details of the url that was shortened in the html
async function displayShortenedUrl(longUrl, shortUrl){
    return `
        <span class="url-to-be-shortened">${longUrl}</span>
        <div>
            <span class="shortened-url">${await shortUrl}</span>
            <button class="copy-url-button cyan rounded">Copy</button>
        </div>
    `
}

// shorten the url using api
export async function shortenUrl(longUrl) {
    try {
      const response = await fetch('http://tinyurl.com/api-create.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `url=${encodeURIComponent(longUrl)}`,
      });
  
      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }
  
      const data = await response.text();
      return data
    } catch (error) {
      console.error('Error:', error);
    }
}

export function displayMessage(element, status = 'error', display = true, message){
    if(display){
        element.classList.remove('hidden')
        element.classList.add(status)
        element.innerText = message
    } else {
        element.classList.add('hidden')
        element.classList.remove(status)
    }
}

export async function createDiv(longUrl, shortUrl, shortUrlContainer) {
    const div = document.createElement('div')
    div.innerHTML = await displayShortenedUrl(longUrl, shortUrl)
    shortUrlContainer.appendChild(div)
}