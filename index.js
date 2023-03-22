import { app } from './src/app.js';
import { dbConnectMySql } from './src/database/config.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`**** SERVER_ON_PORT_${PORT} ****`);
});

dbConnectMySql();
