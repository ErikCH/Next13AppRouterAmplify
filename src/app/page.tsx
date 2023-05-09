"use client";

import { Authenticator, Text, Button } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);
import "@aws-amplify/ui-react/styles.css";

export default function Home() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Text variation="primary">Hello {user?.username}</Text>
          <Button variation="primary" onClick={signOut}>
            Sign out
          </Button>
        </main>
      )}
    </Authenticator>
  );
}
