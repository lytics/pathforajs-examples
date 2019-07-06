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
        "formElements": [
          {
            "type": "text",
            "required": true,
            "label": "Email Address",
            "name": "email"
          },
          {
            "type": "checkbox-group",
            "required": true,
            "label": "Which feeds would you like to subscribe to?",
            "name": "subscription_feeds",
            "values": [
              {
                "label": "Beauty & Perfumes",
                "value": "beauty"
              },
              {
                "label": "Electronics",
                "value": "electronics"
              },
              {
                "label": "Fashion",
                "value": "fashion"
              }
            ]
          }
        ]
      }
    }
  }
}' | jq '.'