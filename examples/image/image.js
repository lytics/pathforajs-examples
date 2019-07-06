(function(window) {
  var imageWidget = window.pathfora.Message({
    id: "image-widget",
    layout: "slideout",
    position: "bottom-right",
    className: "image-widget",
    headline: "Save 10%",
    msg: "<img src=\"assets/iphone-mini.png\" class=\"pf-widget-img-inline\" alt=\"iPhone\">24 hour sale on all Apple mobile phone products!",
    image: "assets/iphone-modal.png",
    variant: "2",
    okShow: true,
    okMessage: "Save Now",
    cancelShow: false
  });

  var modules = {
    target: [{
      segment: "iphone_feature_campaign",
      widgets: [imageWidget]
    }]
  };
  
  window.pathfora.initializeWidgets(modules);
}(window));
