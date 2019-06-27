(function(window) {
  window.pathfora.customData = {
    "offer_code": "FREE8239",
  };

  var entityTemplateWidget = window.pathfora.Message({
    id: "entity-template-widget",
    layout: "bar",
    position: "bottom-fixed",
    className: "entity-template-widget",
    msg: "Use code <strong>{{offer_code}}</strong> for free shipping on your next purchase!",
    okShow: false,
    cancelShow: false
  });
  
  window.pathfora.initializeWidgets([entityTemplateWidget]);
}(window));
