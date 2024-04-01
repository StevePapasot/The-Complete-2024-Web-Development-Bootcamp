/*Create an Express Server:
1. Create a directory
2. Create index.js file.
3. Initialize NPM.
4. Install the Express package from npm.
5. Write Server application in index.js
6. Start server -> node yor_app js
The official website of Express.js: https://expressjs.com/
*/

import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});


/* We can see in which port our computer is currently listening for interactions from outside. Hit the following commands on the terminal.
                  WINDOWS                               MAC/LINUX
    netstat -ano | findstr "LISTENING"        sudo lsof -i -P -n | grep LISTEN
*/