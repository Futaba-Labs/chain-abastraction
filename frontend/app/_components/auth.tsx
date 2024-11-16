"use client";
import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";

export default function Auth() {
  const { login, logout, authenticated } = usePrivy();

  return (
    <Button
      onClick={
        !authenticated
          ? () => login({ loginMethods: ["email", "wallet"] })
          : () => logout()
      }
    >
      {authenticated ? "Logout" : "Login"}
    </Button>
  );
}
