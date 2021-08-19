#!/usr/bin/env node

import { playGame } from "../src/index.js";
import { evenGameLogicFunction, rules } from "../src/games/guessEven.js";

playGame(evenGameLogicFunction, rules, 3);
