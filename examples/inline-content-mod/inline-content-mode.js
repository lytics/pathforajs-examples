(function(window) {
  var cartAbandon = pathfora.Message({
    layout: "inline",
    id: "inline-content-mod-widget-cart-abandon",
    className: "inline-content-mod-widget",
    position: "#demo-inline",
    variant: 2,
    image: "assets/basket.png",
    headline: "Get your order with <span>free shipping</span>",
    msg: "Looks like you were interested in purchasing a product on our site recently. We'd like to offer you free shipping on your current order. You're welcome!",
    okMessage: "Apply Discount"
  });


  var highMomentum = pathfora.Message({
    layout: "inline",
    id: "inline-content-mod-widget-high-momentum",
    className: "inline-content-mod-widget",
    position: "#demo-inline",
    variant: 2,
    image: "assets/basket.png",
    headline: "Get new coupons <span>every month</span>",
    msg: "Want to get monthly coupons for up to 30% off your order every month? Sign up below to subscribe to our coupon mailing list.",
    okMessage: "Sign Up"
  });

  var firstVisit = pathfora.Message({
    layout: "inline",
    id: "inline-content-mod-widget-first-visit",
    className: "inline-content-mod-widget",
    position: "#demo-inline",
    variant: 2,
    image: "assets/iphone.png",
    headline: "Thanks <span>for visiting</span>",
    msg: "Check out our new products. We provide the highest quality in everything from the newest smart phones to your favorite brand of shoes.",
    okMessage: "Shop Now"
  });

  var modules = {
    target: [{
      segment: "high_momentum",
      widgets: [highMomentum]
    },
    {
      segment: "first_time_visitor",
      widgets: [firstVisit]
    },
    {
      segment: "cart_abandon",
      widgets: [cartAbandon]
    }]
  }

  window.pathfora.initializeWidgets(modules);
}(window));
