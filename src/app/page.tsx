"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = authClient.useSession();
  const onSubmit = () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    authClient.signUp.email(
      {
        email,
        name,
        password,
      },
      {
        onError: () => {
          window.alert("Something went wrong");
        },
        onSuccess: () => {
          window.alert("Sucessfully created");
        },
      },
    ); 
  };
  if (session) {
      return (
        <div className="flex flex-col p-4 gap-y-4">
          <p>Logged in as {session.user.name}</p>
          <Button onClick={() => authClient.signOut()}>Sign Out</Button>
        </div>
      );
    }
  const onLogin= () => {
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: () => {
          window.alert("Something went wrong");
        },
        onSuccess: () => {
          window.alert("Sucessful");
        },
      },
    ); 
  };
  return (
    <div className ="flex flex-col gap-y-10">
    <div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onSubmit}>Create User</Button>
    </div>
    <div className="p-4 flex flex-col gap-y-4">

      <Input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onLogin}>Login</Button>
    </div>
    </div>
  );
}
