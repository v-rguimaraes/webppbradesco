//Instrumentando o Application Insights
let appInsights = require('applicationinsights');
//f6fe34c2-6c8f-4d3a-bcce-73ae4bffd2e3
//const instrumentationKey = process.env["APPINSIGHTS_INSTRUMENTATIONKEY"]
const instrumentationKey = "4b36a6dc-9dc4-40bc-9b4c-8c056bde6d91"
appInsights.setup(instrumentationKey).start()
const telemetry = appInsights.defaultClient;


const express = require('express');
const app = express();
const cors = require('cors')

const bodyParser = require('body-parser')
app.use(cors())
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({ 
    extended: true
}));


app.use(express.static(__dirname+"/"));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

//process.env.PORT
const listener = app.listen(8080, function() {
    console.log('Your app is listening on port ' + listener.address().port);
  });