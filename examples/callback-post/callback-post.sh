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
        ],
        "formStates": {
          "success": {
            "headline": "Success",
            "msg": "Thanks for signing up, you can expect to receive updates in your inbox soon."
          },
          "error": {
            "headline": "Error",
            "msg": "There was an issue submitting your subscription. Please try again or <a href=\"/contact\">contact us</a> if the issue persists."
          }
        },
        "confirmAction": {
          "waitForAsyncResponse": true,
          "callback": "function(e,a,t){if(a.data){var n=a.data.reduce(function(e,a){if(e.hasOwnProperty(a.name)){var t=e[a.name],n=Array.isArray(t)?t:[t];n.push(a.value),e[a.name]=n}else e[a.name]=a.value;return e},{}),r=new XMLHttpRequest;r.onload=function(){200===this.status?t(!0):t(!1)},r.open(\"POST\",\"http://yourwebsite.com/custom/endpoint\",!0),r.setRequestHeader(\"Content-Type\",\"application/json;charset=UTF-8\"),r.send(JSON.stringify(n))}}"
        }
      }
    }
  }
}' | jq '.'
