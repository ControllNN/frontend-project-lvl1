#!/usr/bin/env node

import { printQestion } from "../src/games/guessEven.js";
import { getTerm } from "../src/games/guessEven.js";
import { greet } from "../src/cli.js";
import { printName } from "../src/cli.js";

greet();
printName();
getTerm();
printQestion();
