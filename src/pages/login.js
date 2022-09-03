import React from "react";
import { Layout, Title, Input, Link, Button } from "../components";

export default function LoginPages() {
  return (
    <Layout>
      <Title text="Faça login" size="large">
        {" "}
      </Title>
      <Title text="ou crie sua conta" size="medium">
        {" "}
      </Title>

      <Input type="email" label="Email" />
      <Input type="password" label="Senha" />

      <Button text="Fazer login" />
      <Link to="/signup" variant="secondary">
        ou crie sua conta
      </Link>
    </Layout>
  );
}
