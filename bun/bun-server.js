import { serve } from "bun";

serve({
  port: 3000,
  fetch(request) {
    return new Response("Hello from Bun!");
  },
  websocket: {
    message(ws, message) {
      ws.send(message); 
    },
  },
  listen: (port) => {
    console.log(`Server listening on port ${port}`);
  },
});
