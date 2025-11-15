export const dynamic = 'force-static';

export async function GET(request: Request) {
  try {
    const username = "codingguru2221"
    const token = process.env.GITHUB_TOKEN

    if (!token) {
      return Response.json({ error: "GitHub token not configured" }, { status: 400 })
    }

    // Fetch all user repositories using pagination
    let allRepos: any[] = [];
    let page = 1;
    let reposResponse;
    
    do {
      reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100&page=${page}`, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      })

      if (!reposResponse.ok) {
        throw new Error(`GitHub API error: ${reposResponse.statusText}`)
      }

      const repos = await reposResponse.json();
      allRepos = allRepos.concat(repos);
      page++;
    } while (reposResponse.headers.get('link') && reposResponse.headers.get('link')?.includes('rel="next"'))

    // Fetch user stats
    const userResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    })

    const user = await userResponse.json()

    return Response.json({
      repos: allRepos.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url, // using html_url instead of api url
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
      })),
      stats: {
        login: user.login,
        followers: user.followers,
        following: user.following,
        publicRepos: user.public_repos,
        bio: user.bio,
        location: user.location,
        twitterUsername: user.twitter_username,
        blog: user.blog,
      },
    })
  } catch (error) {
    console.error("[v0] GitHub API error:", error)
    return Response.json({ error: "Failed to fetch GitHub data" }, { status: 500 })
  }
}
