import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// Health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// GitHub proxy for client (avoids CORS/rate issues). Provide USERNAME via env.
app.get('/api/github/top-repos', async (req, res) => {
  try {
    const username = process.env.GITHUB_USERNAME || 'AnuragPandey19';
    const gh = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    const repos = await gh.json();
    if (!Array.isArray(repos)) return res.status(500).json({ error: 'Unexpected GitHub response' });
    const top = repos
      .filter(r => !r.fork)
      .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
      .slice(0, 6)
      .map(r => ({
        name: r.name,
        html_url: r.html_url,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count
      }));
    res.json(top);
  } catch (e) {
    res.status(500).json({ error: 'GitHub fetch failed' });
  }
});

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Portfolio running on http://localhost:${PORT}`);
});



