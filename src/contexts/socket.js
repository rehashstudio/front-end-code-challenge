import socketio from "socket.io-client";
import React from "react";

export const socket = socketio.connect(process.env.WS_URL);
export const SocketContext = React.createContext();