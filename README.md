# Real Time Chat App
This is the frontend application for the real-time chat system. It connects to the [Real-time Chat Server](https://github.com/cjxo/real-time-chat-server) and allows users to send and receive messages in real-time.
Please see the [live preview](https://real-time-chat-fullstack.onrender.com/). Pardon the delay of live preview loading, as I am using the free plan
of Render!

# Prerequisites
- Node.js
- NPM

Before running the client app, you need the **Real-time Chat Server** running as the client is just the UI. The server handles all the real-time messaging and user authentication.
Please follow the [installation instructions for the Real-time Chat Server](https://github.com/cjxo/real-time-chat-server) to get the server up and running first.

# Installation
```bash
git clone https://github.com/cjxo/real-time-chat-client.git
cd real-time-chat-client
npm install
```

To start the client, run
```bash
npm run dev
```

Once Vite has started, you should see output like the following:
```bash
VITE v6.0.7  ready in 1026 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

The client app will be available on the address provided by 'Local'.

# Todos/Missing Features
- [ ] Profile view of other users
- [ ] Last active/online status
- [ ] Desktop version of message display
- [ ] Profile Picture Update

# Attribution
- [SVGRepo](https://www.svgrepo.com/)
- [Exo 2 Font](https://fonts.google.com/specimen/Exo+2)
