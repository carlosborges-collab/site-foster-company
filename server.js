import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __distname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve os arquivos estáticos da pasta 'dist' (gerada pelo npm run build)
app.use(express.static(path.join(__distname, 'dist')));

// Garante que qualquer rota caia no index.html (essencial para sites React)
app.get('*', (req, res) => {
  res.sendFile(path.join(__distname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});