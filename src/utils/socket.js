import { io } from "socket.io-client";

let socket = null;

export const connectSocket = (userId) => {
  if (!userId || socket) return;

  socket = io("http://localhost:8080", {
    query: { userId },
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("🟢 Connected to socket:", socket.id);
  });

  socket.on("disconnect", () => {
    console.log("🔴 Disconnected from socket");
  });
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
