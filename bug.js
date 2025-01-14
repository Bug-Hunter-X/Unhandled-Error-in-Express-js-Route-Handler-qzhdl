const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  // ... other code to fetch user data ...
  res.json({ userId });
});
app.listen(3000, () => console.log('Server listening on port 3000'));