const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API running'));

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/qa', require('./routes/api/qa'));
app.use('/api/jql4', require('./routes/api/jql4'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
