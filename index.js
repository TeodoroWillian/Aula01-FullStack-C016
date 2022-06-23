const express = require('express');
const cors = require('cors');
const paletasRoutes = require('./src/routes/paletas');

app.use(express.json());
app.use(cors());
app.use('/paletas', paletasRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
