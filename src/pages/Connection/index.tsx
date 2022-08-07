import React, { FC } from "react";
import { Form, FormProps } from "ink-form";
import { RouteComponentProps, withRouter } from "@giusto/ink-router";

import { dbClientFactory } from "../../services/db";

type FromFields = {
  host: string;
  port: number;
  user: string;
  database: string;
  password: string;
};

const form: FormProps = {
  form: {
    title: "Welcome to Postgres Client CLI",
    sections: [
      {
        title: "Configure database connection",
        fields: [
          {
            type: "string",
            name: "host",
            label: "Host",
            initialValue: "localhost",
          },
          {
            type: "integer",
            name: "port",
            label: "PORT",
            initialValue: 5432,
            min: 0,
            max: 65535,
          },
          {
            type: "string",
            name: "user",
            label: "User",
            initialValue: "postgres",
          },
          {
            type: "string",
            name: "database",
            label: "Default database",
          },
          { type: "string", name: "password", label: "Password", mask: "*" },
        ],
      },
    ],
  },
};

const ConnectionPage: FC<RouteComponentProps> = ({ history }) => {
  return (
    <Form
      {...form}
      onSubmit={(result: FromFields) => {
        dbClientFactory({
          client: "postgresql",
          connection: {
            host: result.host,
            port: result.port,
            user: result.user,
            database: result.database,
            password: result.password,
          },
        });

        history.push("/query");
      }}
    />
  );
};

export default withRouter(ConnectionPage);
