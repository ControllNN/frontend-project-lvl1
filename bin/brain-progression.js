#!/usr/bin/env node

import { playGame } from "../src/index.js";
import {
  progressionGameLogicFunction,
  rules,
} from "../src/games/progression.js";

playGame(progressionGameLogicFunction, rules, 3);
