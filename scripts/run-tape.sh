#!/bin/bash

babel-tape-runner './modules/**/*.tape.js' | tap-dot
