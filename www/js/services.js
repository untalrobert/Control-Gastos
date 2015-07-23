angular.module('starter.services', [])

.factory('fireBaseData', function($firebase) {
  var ref = new Firebase("https://control-gastos.firebaseio.com/"),
      refExpenses = new Firebase("https://control-gastos.firebaseio.com/expenses"),
      refRoomMates = new Firebase("https://control-gastos.firebaseio.com/room-mates");
  return {
    ref: function () {
      return ref;
    },
    refExpenses: function () {
      return refExpenses;
    },
    refRoomMates: function () {
      return refRoomMates;
    }
  }
});