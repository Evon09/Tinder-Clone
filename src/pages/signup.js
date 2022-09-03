import React from "react";
import {
  Layout,
  Title,
  Input,
  Link,
  Button,
  Textarea,
  Select
} from "../components";

export default function Signup() {
  return (
    <Layout>
      <Title text="Seja bem vindo(a)" size="large" />
      <Title text="ou crie sua conta" size="medium" />

      <Input type="text" label="Nome" />
      <Input type="email" label="Email" />
      <Input type="date" label="Data de nascimento" />
      <Input type="text" label="instagram" />

      <Select
        label="Preferencia"
        options={[
          {
            label: "Homem",
            value: "MALE"
          },
          {
            label: "Mulher",
            value: "FE"
          },
          {
            label: "Todos",
            value: "ALL"
          }
        ]}
      />
      <Textarea label="Sobre você" />

      <Link to="/login" variant="secondary">
        ou faça login
      </Link>
    </Layout>
  );
}
