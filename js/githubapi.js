import { Octokit } from "https://esm.sh/@octokit/rest";

async function listRepoIssues() {
  try {
    const octokit = new Octokit({
      auth: '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',
    });

    const response = await octokit.request('GET /user/repos', {
headers: {
  'X-GitHub-Api-Version': '2022-11-28'
}
})

    console.log("Response data:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the async function
listRepoIssues();
