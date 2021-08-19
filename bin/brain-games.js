#!/usr/bin/env node
import { getName, userName } from "../src/userData.js";
import { greet, printUserName } from "../src/index.js";
import { printText } from "../src/cli.js";

printText(greet);
getName();
printUserName(userName);
