(function(window) {
  var videoWidget = window.pathfora.Message({
    id: "video-widget",
    layout: "modal",
    className: "video-widget",
    headline: "iPhone XR available now",
    msg: "Get yours, or a discount on all previous models today from <strong>MEGASTORE</strong>.",
    okShow: true,
    okMessage: "Shop iPhones",
    cancelShow: false,
    onLoad: function (event, module) {
      // create a div for the video
      var videoDiv = document.createElement("div");
      videoDiv.className = "pf-widget-video";

      // place the video in the div
      videoDiv.innerHTML = "<iframe src=\"https://www.youtube.com/embed/tG7vx7-3sl0\" frameborder=\"0\" allowfullscreen></iframe>";
      
      // append the div to the widget node
      var content = module.widget.querySelector(".pf-widget-content");
      var text = module.widget.querySelector(".pf-widget-text");
      content.insertBefore(videoDiv, text);
    }
  });

  var modules = {
    target: [{
      segment: "high_affinity_iphone",
      widgets: [videoWidget]
    }]
  };
  
  window.pathfora.initializeWidgets(modules);
}(window));
