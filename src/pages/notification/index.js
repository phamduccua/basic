// import React, { useEffect, useState } from "react";
// import { Client } from "@stomp/stompjs";
// import SockJS from "sockjs-client";

function Notification() {
  // const [notifications, setNotifications] = useState([]);

  // // http://localhost:8080/ws
  // // https://rehearten-production.up.railway.app/ws
  // useEffect(() => {s
  //   const socket = new SockJS("http://localhost:8080/ws", null, {
  //     withCredentials: true,
  //   });

  //   const stompClient = new Client({
  //     webSocketFactory: () => socket,
  //     debug: (str) => console.log("STOMP DEBUG:", str),
  //     reconnectDelay: 5000, // tự động reconnect sau 5s
  //   });

  //   stompClient.onConnect = () => {
  //     console.log("✅ Connected to WebSocket");
  //     stompClient.subscribe("/user/queue/notifications", (message) => {
  //       const msg = message.body;
  //       setNotifications((prev) => [msg, ...prev]);
  //     });
  //   };

  //   stompClient.onStompError = (frame) => {
  //     console.error("❌ STOMP error:", frame.headers["message"]);
  //     console.error("Details:", frame.body);
  //   };

  //   stompClient.onWebSocketError = (event) => {
  //     console.error("❌ WebSocket error:", event);
  //   };

  //   stompClient.onDisconnect = () => {
  //     console.warn("⚠️ Disconnected from WebSocket");
  //   };

  //   stompClient.activate();

  //   return () => {
  //     stompClient.deactivate();
  //   };
  // }, []);

  return (
    <div style={{ padding: "10px", maxWidth: "400px" }}>
      {/* <h3>Notifications</h3>
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {notifications.map((n, idx) => (
            <li key={idx}>{n}</li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default Notification;
