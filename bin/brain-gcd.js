#!/usr/bin/env node

import { gcdGameLogicFunction, rules } from "../src/games/gcd.js";
import { playGame } from "../src/index.js";

playGame(gcdGameLogicFunction, rules, 3);
