const fs = require('fs');
const express = require('express');
const app = express();

app.get('/animals', (req, res) => {
  fs.readFile(__dirname + '/' + 'animals.json', 'utf-8', (err, data) => {
    if (err)
      throw err;
    else
      res.end(data);
  });
});

app.get('/animals/:id', (req, res) => {
  fs.readFile(__dirname + '/' + 'animals.json', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    } else {
      const json = JSON.parse(data);
      const animals = json.animals;
      let result = undefined;

      for (animal of animals) {
        if (animal.id == req.params.id)
          result = animal;
      }

      if (result)
        res.end(JSON.stringify(result));
      else
        res.status('404').send('404: Not Found');
    }
  });
});

app.get('*', (req, res) => res.status('404').send('404: Not Found'));

app.listen(3000, () => {
  console.log('REST API running on Port 3000');
});