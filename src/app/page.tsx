import { Authenticator } from "./Authenticator";

import { Amplify } from "aws-amplify";
import awsExports from "@/aws-exports";
Amplify.configure(awsExports);
export default function Home() {
  return (
    <div>
      <h1>Hi</h1>
      Hello World
      <Authenticator></Authenticator>
    </div>
  );
}
