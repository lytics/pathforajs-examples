(function(window) {
  var contentRecWidget = window.pathfora.Message({
    id: "content-rec-widget",
    layout: "modal",
    className: "content-rec-widget",
    headline: "Wait! Before you go...",
    msg: "... We think you may like this. Maybe check it out before you leave.",
    variant: "3",
    okShow: false,
    cancelShow: false,
    recommend: {
      visited: false,
      collection: "718c83f8c785ed67b8055d50ffd46a84",
      display: {
        date: true,
        author: true,
        dateOptions: { 
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        },
        descriptionLimit: 220
      }
    },
    displayConditions: {
      showOnExitIntent: true
    },

    // IGNORE THE NEXT LINE: you won't need it as Pathfora will
    // return recommended content for you. We are using this to mock
    // content recommendations in the example preview.
    content: mockContent
  });

  var modules = {
    target: [{
      segment: "likely_to_reengage",
      widgets: [contentRecWidget]
    }]
  };
  
  window.pathfora.initializeWidgets(modules);
}(window));
