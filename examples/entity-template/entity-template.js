(function(window) {
  var entityTemplateWidget = window.pathfora.Message({
    id: "entity-template-widget",
    layout: "bar",
    position: "bottom-fixed",
    className: "entity-template-widget",
    msg: "Use code <strong>{{offer_code}}</strong> for free shipping on your next purchase!",
    okMessage: "Get Free Shipping!",
    cancelShow: false,
    confirmAction: {
      callback: function () {
        window.location.href = "https://yourwebsite.com/checkout?code={{offer_code}}";
      }
    }
  });

  var modules = {
    target: [{
      segment: "high_ltv_with_code",
      widgets: [entityTemplateWidget]
    }]
  };
  
  window.pathfora.initializeWidgets(modules);
}(window));
