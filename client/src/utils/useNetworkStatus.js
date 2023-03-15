import { useState, useEffect } from "react";
import isOnline from 'is-online';

const useNetworkStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(null);

  useEffect(() => {
    isOnline().then(status => {
      setOnlineStatus(status);
    });

    const intervalId = setInterval(() => {
      isOnline().then(status => {
        setOnlineStatus(status);
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return onlineStatus
};

export default useNetworkStatus;
