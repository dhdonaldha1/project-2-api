#!/bin/bash

API="http://localhost:4741"
URL_PATH="/animes"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "anime": {
      "translation": "'"${TRANSLATION}"'",
      "genre": "'"${GENRE}"'",
      "episodes": "'"${EPISODES}"'"
    }
  }'

echo
