// Server.js

const express = require('express');
const bodyParser = require('body-parser');
const tf = require('@tensorflow/tfjs');

const app = express();
const PORT = 5000; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let sensorData = {
    temperature: null,
    humidity: null
};

// Route to receive POST data from NodeMCU
app.post('/data', (req, res) => {
    console.log('Received data:', req.body);
    sensorData.temperature = req.body.temperature;
    sensorData.humidity = req.body.humidity;
    res.send('Data received');
});

// Home route to display sensor data
app.get('/', (req, res) => {
    if (sensorData.temperature && sensorData.humidity) {
        res.send(`
            <html>
                <head>
                    <title>Sensor Data</title>
                    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
                </head>
                <body>
                    <h1>Temperature: ${sensorData.temperature}°C</h1>
                    <h1>Humidity: ${sensorData.humidity}%</h1>
                    <button onclick="showValues()">Show</button>
                    <button onclick="predict()">Predict</button>
                    <div id="predictionResults"></div>
                    <script>
                        async function showValues() {
                            document.getElementById('predictionResults').innerHTML = 
                                '<p>Temperature: ' + ${sensorData.temperature} + '°C</p>' +
                                '<p>Humidity: ' + ${sensorData.humidity} + '%</p>';
                        }
                        async function predict() {
                            const modelUrl = 'path/to/your/model.h5';
                            const model = await tf.loadLayersModel(modelUrl);
                            console.log('Model loaded successfully');

                            const inputData = [${sensorData.temperature}, ${sensorData.humidity}];
                            const inputTensor = tf.tensor2d(inputData, [1, inputData.length]);

                            const prediction = model.predict(inputTensor);
                            const results = prediction.dataSync();
                            console.log('Prediction results:', results);
                            document.getElementById('predictionResults').innerHTML = '<p>Prediction Results: ' + results + '</p>';
                        }
                    </script>
                </body>
            </html>
        `);
    } else {
        res.send('No sensor data available.');
    }
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:${PORT}");
});