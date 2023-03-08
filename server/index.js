const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Merhaba Dünya!' 
});
});


app.listen(5000, () => {
  console.log('5000. portta dinliyor.');
});