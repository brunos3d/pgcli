#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./app";

import packageJson from "../package.json";

meow(
  `
	Usage
	  $ ${packageJson.name}

	Examples
	  $ ${packageJson.name}
`
);

render(<App />);
