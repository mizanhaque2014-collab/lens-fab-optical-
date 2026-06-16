import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Hostinger or general Node environments often specify the port via process.env.PORT
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the build output directory 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback: redirect all other requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running in production and listening on port ${PORT}`);
});
