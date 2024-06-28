const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

mongoose.connect('mongodb://127.0.0.1:27017/customer', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  mobileNumber: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/Login', async (req, res) => {
    console.log(req.body)
  const { mobileNumber, password } = req.body;
  try {
    const user = await User.findOne({ mobileNumber, password });
    console.log(user, mobileNumber, password)
    if (user) {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(400).send({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
