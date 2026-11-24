import app from './app.js';

try {
  process.loadEnvFile();
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

const port = Number(process.env.PORT ?? 3000);

app.listen(port, '127.0.0.1', () => {
  console.log(`NIMS backend listening at http://127.0.0.1:${port}`);
});
