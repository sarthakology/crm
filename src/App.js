import { useEffect } from "react";
import AppRouter from "./AppRouter";
import { connectSocket, disconnectSocket } from "./utils/socket";

export default function App() {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.id) {
      connectSocket(user.id);
    }

    return () => {
      disconnectSocket();
    };
  }, []);

  return <AppRouter />;
}
