let express = required('express');
let app = express();
let cors = required('cors');

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World! Second Attempt');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});