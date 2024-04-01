/*Create an Express Server:
1. Create a directory
2. Create index.js file.
3. Initialize NPM.
4. Install the Express package from npm.
5. Write Server application in index.js
6. Start server
The official website of Express.js: https://expressjs.com/
*/

import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
