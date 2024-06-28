import axios from "axios";
import React, { useEffect } from "react";

export default function OrvalAuthProvider(props: {
  children: React.ReactNode;
  initialState: string | null;
}) {
  const [token, setToken] = React.useState(props.initialState);

  useEffect(() => {
    const interceptorId = axios.interceptors.request.use((config) => {
      config.headers.set("X-TBA-Auth-Key", token);
      return config;
    });

    return () => axios.interceptors.request.eject(interceptorId);
  }, [token]);

  //   return <AuthContext
}
