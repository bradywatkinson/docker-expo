#!/bin/bash

exp login --non-interactive --username $EXPO_USERNAME --password $EXPO_PASSWORD

exp "$@"
