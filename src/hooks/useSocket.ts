import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

const useSocket = () => {
  const [socket, setSocket] = useState<Socket | undefined>(window.sockets);
  useEffect(() => {
    if (window.sockets == undefined) {
      window.sockets = io('http://localhost:3001', {
        // autoConnect: true,
        // forceNew: true,
        transports: ['websocket', 'polling'],
      })
        .on('connect', () => {
          console.log('connect 👌 ', window.sockets.connected);
        })
        .on('error', (err) => {
          console.log(err);
        });
    }
    setSocket(window.sockets);
  }, []);

  return socket;
};

export default useSocket;
