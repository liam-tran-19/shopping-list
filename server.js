const app = require('./backend/app');
const config = require('./backend/config/index')

const { PORT } = config;


app
  .listen(PORT)
  .on("listening", () =>
    console.log(`Server running on port ${PORT}`)
  );