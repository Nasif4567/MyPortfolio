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
    
    const repoList = document.getElementById('repoList');
        data.forEach(repo => {
          const li = document.createElement('li');
          li.textContent = repo.name;
          repoList.appendChild(li);
        });

    console.log("Response data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the async function
listRepoIssues();
