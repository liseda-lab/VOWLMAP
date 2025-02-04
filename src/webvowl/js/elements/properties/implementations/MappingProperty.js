var BaseProperty = require("../BaseProperty");

module.exports = (function() {

  var o = function(graph) {
      BaseProperty.apply(this, arguments);

      this.label("mapping")
          .styleClass("objectproperty")
          .type("owl:ObjectProperty");
  };
  o.prototype = Object.create(BaseProperty.prototype);
  o.prototype.constructor = o;

  return o;
}());