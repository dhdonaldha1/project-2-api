#!/bin/bash

API="http://localhost:4741"
URL_PATH="/animes"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  # --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "review": {
      "title": "'"${TITLE}"'",
      "content": "'"${CONTENT}"'",
      "animeId": "'"${ANIME_ID}"'",
      "owner": "'"${OWNER}"'"
    }
  }'

echo
