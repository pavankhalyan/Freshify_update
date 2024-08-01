#include <ESP8266WiFi.h>
#include <DHT.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>
#include <Servo.h>

#define DHTPIN D4       // Pin connected to the DHT sensor
#define DHTTYPE DHT11   // Change this to DHT22 if you're using that type of sensor
#define SERVO_PIN D1    // Pin connected to the servo motor
#define SERVO_MIN_ANGLE 0
#define SERVO_MAX_ANGLE 180

const char* ssid = "your-ssid";
const char* password = "your-password";
const char* serverAddress = "http://your-flask-server-ip:5000/data"; // Replace with your Flask server IP address

DHT dht(DHTPIN, DHTTYPE);
Servo servo;

void setup() {
  Serial.begin(115200);
  delay(100);

  dht.begin();
  servo.attach(SERVO_PIN);

  connectToWiFi();
}

void loop() {
  delay(2000);

  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.print(" %\t");
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" °C");

  sendDataToServer(temperature, humidity);

  // Map temperature to servo angle
  int servoAngle = map(temperature, 0, 40, SERVO_MIN_ANGLE, SERVO_MAX_ANGLE);
  servo.write(servoAngle);
  delay(500); // Delay to allow servo to move to the desired position
}

void connectToWiFi() {
  Serial.println("Connecting to WiFi");
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
}

void sendDataToServer(float temperature, float humidity) {
  WiFiClient client;
  HTTPClient http;

  // Construct the request body with temperature and humidity data
  String requestBody = "temperature=" + String(temperature) + "&humidity=" + String(humidity);

  Serial.print("Sending data to server: ");
  Serial.println(requestBody);

  http.begin(client, serverAddress); // Specify the server address and initialize the HTTP client
  http.addHeader("Content-Type", "application/x-www-form-urlencoded"); // Set the content type
  int httpResponseCode = http.POST(requestBody); // Send the HTTP POST request with the request body

  if (httpResponseCode > 0) {
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);
  } else {
    Serial.print("Error sending HTTP request: ");
    Serial.println(httpResponseCode);
  }

  http.end(); // Close connection
}
