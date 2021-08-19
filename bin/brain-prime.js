#!/usr/bin/env node

import { primeGameLogicFunction, rules } from "../src/games/prime.js";
import { playGame } from "../src/index.js";

playGame(primeGameLogicFunction, rules, 3);
