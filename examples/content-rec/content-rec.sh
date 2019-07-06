# Create the base experience in Lytics Experience UI.

# Generate a new token, or paste an existing one below.
# https://learn.lytics.com/understanding/product-docs/account-management/managing-api-tokens
export LIOKEY={api_token_here}

# Paste the experience ID below and run the command to apply the overrides
curl -s -H "Authorization: $LIOKEY" \
  -H "Content-Type: text/json" \
  -XPATCH "http://api.lytics.io/api/experience/{experience_id}" -d '{
  "experience": {
    "vehicle": {
      "detail_override": {
        "recommend": {
          "display": {
            "date": true,
            "author": true,
            "dateOptions": { 
              "weekday": "long",
              "year": "numeric",
              "month": "long",
              "day": "numeric"
            },
            "descriptionLimit": 220
          }
        }
      }
    }
  }
}' | jq '.'