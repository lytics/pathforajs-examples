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
        "onLoad": "function(e,t){var r=document.createElement(\"div\");r.className=\"pf-widget-video\",r.innerHTML=\"<iframe src=\\\"https://www.youtube.com/embed/tG7vx7-3sl0\\\" frameborder=\\\"0\\\" allowfullscreen></iframe>\";var i=t.widget.querySelector(\".pf-widget-content\"),o=t.widget.querySelector(\".pf-widget-text\");i.insertBefore(r,o)}"
      }
    }
  }
}' | jq '.'