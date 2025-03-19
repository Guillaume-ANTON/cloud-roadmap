const express = require('express'); // Importation correcte d'Express
const app = express(); // Création de l'application Express

app.get('/', (req, res) => {
    res.send('Hello from Dockerized Node.js!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});