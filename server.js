const { app } = require('./index.js');
// add db initiallaization
const db_access = require('./db.js');
const db = db_access.db;
// Start the server (no database connection)
const PORT = 3000;
db.serialize(() => {
  db.run(db_access.createTripTable, (err) => {
    if (err) console.log('Error creating trip table:', err.message);
  });
});

// Start listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});