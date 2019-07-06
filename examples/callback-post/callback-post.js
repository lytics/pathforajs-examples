(function(window) {
  var customTrackingWidget = window.pathfora.Form({
    id: "custom-tracking-widget",
    layout: "slideout",
    position: "bottom-left",
    className: "custom-tracking-widget",
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
    okMessage: "Subscribe",
    formStates: {
      success: {
        headline: "Success",
        msg: "Thanks for signing up, you can expect to receive updates in your inbox soon.",
        delay: 0
      },
      error: {
        headline: "Error",
        msg: "There was an issue submitting your subscription. Please try again or <a href=\"/contact\">contact us</a> if the issue persists."
      }
    },
    confirmAction: {
      waitForAsyncResponse: true,
      callback: function (event, payload, cb) {
        // validate the data exists
        if (!payload.data) {
          return;
        }

        // reformat the payload for the request
        var output = payload.data.reduce(function(acc, field) {
          // multiple value - store as an array
          if (acc.hasOwnProperty(field.name)) {
            // make an array with the existing and current values
            var existingValue = acc[field.name];
            var arr = Array.isArray(existingValue) ? existingValue : [existingValue];
            arr.push(field.value);
            acc[field.name] = arr;
          
          // single value
          } else {
            acc[field.name] = field.value;
          }
          return acc;
        }, {});

        // make the request to the third party
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
          // if successful load the form success state
          if (this.status === 200) {
            cb(true);
          // otherwise trigger the form error state
          } else {
            cb(false);
          }
        };
        xhr.open("POST", "http://yourwebsite.com/custom/endpoint", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(output));
      }
    }
  });

  var modules = {
    target: [{
      segment: "high_intensity",
      widgets: [customTrackingWidget]
    }]
  };

  window.pathfora.initializeWidgets(modules);
}(window));
