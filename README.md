# WebSocket Server Performance Comparison

This project compares the performance of Bun and Express servers when handling WebSocket connections.

## Project Structure

* **bun:** Contains the Bun server implementation and the test configs json.
* **express:** Contains the Express server implementation and the test configs json.

## Instructions:

* install test servers dependencies
    ```bash
      npm install bun express socket.io
     ```
    
* install and setup **Go** from https://go.dev/doc/install
  
* install Bombardier
    ```bash
   go get -u github.com/codesenberg/bombardier
    ```

        
* start the test servers on separate terminals by running:
  ```bash
      npm run start-bun
    ```
  ```bash
      npm run start-express
    ```
  
 * excute the performace test on separate terminals by running:
  ```bash
      npm run bombardier-bun
   ```
  ```bash
      npm run bombardier-express
   ```


## Info:
  each command will bombard it's server with 1000 requests on 100 concurrent connections
  and logs the results. 








