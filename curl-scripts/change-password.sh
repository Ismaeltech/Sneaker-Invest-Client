

curl "https://protected-citadel-72186.herokuapp.com/" \
    --include \
    --request PATCH \
    --header "Content-Type: application/json" \
    --header "Authorization: Token token=${TOKEN}" \
    --data '{
      "passwords": {
        "old": "'"${OLD}"'"
        "new": "'"${NEW}"'"
      }
    }'

    echo
