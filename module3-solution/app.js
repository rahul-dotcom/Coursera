(function() {
  "use strict";

  angular.module("MyApp", [])
    .controller("MyController", MyController);

  MyController.$inject = [];
  function MyController() {
    var me = this;

    me.value = "Hello world!";
  }
})();