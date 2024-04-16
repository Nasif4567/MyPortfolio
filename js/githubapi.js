async function listRepoIssues() {
  try {
    const response = await fetch('https://api.github.com/user/repos', {
      headers: {
        'Authorization': 'Bearer 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',
        'Accept': 'application/vnd.github.v3+json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const data = await response.json();
    
    const repoContainer = document.getElementById('repoContainer');
    data.forEach(repo => {
      const card = document.createElement('div');
      card.classList.add('card');

      const cardContent = `
        <h3>${repo.name}</h3>
        <p>${repo.description}</p>
        <p>${repo.language}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>

      `;
      card.innerHTML = cardContent;

      repoContainer.appendChild(card);
    });

    console.log("Response data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the async function
listRepoIssues();
