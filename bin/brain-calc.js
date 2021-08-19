#!/usr/bin/env node

import { playGame } from "../src/index.js";
import { calcGameLogicFunction, rules } from "../src/games/calc.js";

playGame(calcGameLogicFunction, rules, 3);
