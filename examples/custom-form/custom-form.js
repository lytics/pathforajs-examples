(function(window) {
  var customFormWidget = window.pathfora.Form({
    id: "custom-form-widget",
    layout: "slideout",
    position: "bottom-left",
    className: "custom-form-widget",
    headline: "Sign up for our Newsletter",
    formElements: [
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
    okMessage: "Subscribe"
  });
  window.pathfora.initializeWidgets([customFormWidget]);
}(window));
