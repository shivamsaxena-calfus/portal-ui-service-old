"use client"
import { AuthProvider } from "react-oidc-context";
import React from "react";
import { env } from 'next-runtime-env';

const onSigninCallback = (): void => {
  window.history.replaceState(
      {},
      document.title,
      window.location.pathname
  )
}

const oidcConfig = {
  authority: env('NEXT_PUBLIC_KEYCLOAK_BASE_URL'),
  client_id: env('NEXT_PUBLIC_KEYCLOAK_CLIENT_ID'),
  redirect_uri: env('NEXT_PUBLIC_UI_BASE_URL'),
  response_type: "code",
  onSigninCallback
};

export default function AthenticationProvider({children}: {children: React.ReactNode}) {
  return (
    <AuthProvider {...oidcConfig}>
      {children}
    </AuthProvider>
  );
}
