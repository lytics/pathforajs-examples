(function(window) {
  var slideoutWidget = window.pathfora.Message({
    id: "slideout-widget",
    layout: "slideout",
    className: "slideout-widget",
    headline: "Testing the slideout styles",
    msg: "This is a slideout"
  });
  
  var modalWidget = window.pathfora.Message({
    id: "modal-widget",
    layout: "modal",
    className: "modal-widget",
    headline: "Testing the modal styles",
    msg: "This is a modal"
  });

  var gateWidget = window.pathfora.SiteGate({
    id: "gate-widget",
    className: "gate-widget",
    headline: "Testing the gate styles",
    msg: "This is a gate"
  });

  var barWidget = window.pathfora.Message({
    id: "bar-widget",
    layout: "bar",
    position: "top-fixed",
    className: "bar-widget",
    headline: "Testing the bar styles",
    msg: "This is a bar"
  });

  var widgets = [
    slideoutWidget,
    modalWidget,
    gateWidget,
    barWidget
  ]
  window.pathfora.initializeWidgets(widgets);
}(window));
