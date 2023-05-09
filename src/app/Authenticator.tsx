"use client";
import { Authenticator as AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsExports);

export function Authenticator({ children }: { children?: React.ReactNode }) {
  return (
    <div>
      <h1>test</h1>
      <AmplifyAuthenticator>{children}</AmplifyAuthenticator>
    </div>
  );
}
