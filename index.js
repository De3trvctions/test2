let express = required('express');
let app = express();
let bodyParser = required('body-parser');
let cors = required('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', function (req, res) {
  res.send('Hello World! Second Attempt');
  // res.json({
  //   text: "Simple CORS requests are working. [GET]"
  // });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});