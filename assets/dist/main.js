var app = "";
const routeMode = location.pathname.split("/")[1];
switch (routeMode) {
  case "watch":
  case "create":
  case "manage":
    import("./slideshow.js").then(function(n) {
      return n.C;
    }).then(({ default: slideshow }) => {
      slideshow(routeMode, {});
    });
    break;
  default:
    import("./index.js").then(({ default: index }) => index());
    break;
}
//# sourceMappingURL=main.js.map
