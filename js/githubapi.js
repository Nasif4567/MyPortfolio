async function listRepoIssues() {
  try {
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = 'hide'; // Show loading spinner
    
    const response = await fetch('https://api.github.com/user/repos', {
      headers: {
       
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const data = await response.json();
    
    const repoContainer = document.getElementById('repoContainer');
    const assetsFolder = 'shuffle/';
    const images = ['Picture1.jpg', 'Picture2.jpg', 'Picture3.jpg', 'Picture4.jpg'];
    shuffleArray(images); // Shuffle the images array

    for (let i = 0; i < data.length; i++) {
      const card = document.createElement('div');
      card.classList.add('card');


    loadingSpinner.style.display = 'none';


      const repoIndex = i % data.length; // Use modular arithmetic to repeat repo data
      const imageIndex = i % images.length; // Use modular arithmetic to repeat images
      const cardContent = `
        <img src="${assetsFolder}${images[imageIndex]}" alt="Image ${imageIndex + 1}">
        <h3>${data[repoIndex].name}</h3>
        <p>${data[repoIndex].description}</p>
        <a href="${data[repoIndex].html_url}" target="_blank">View on GitHub</a>
      `;
      card.innerHTML = cardContent;

      repoContainer.appendChild(card);
    }

    console.log("Response data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

listRepoIssues();
