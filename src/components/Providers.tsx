"use client";
import React, { useEffect, useState } from "react";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/app/context/UserContext";
import Loader from "@/components/common/Loader";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const client = new Ably.Realtime({
    key: "xiEQTw.SBJKWA:Kv7RDv6PngxN8y8ttHsOWHDQqchaEYtU9rgKefhsl7o",
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <SessionProvider>
      <UserProvider>
        <AblyProvider client={client}>
          <ChannelProvider channelName="chat-demo1">
            {children}
          </ChannelProvider>
        </AblyProvider>
      </UserProvider>
    </SessionProvider>
  );
}
