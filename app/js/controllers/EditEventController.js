'use strict';

eventsApp.controller('EditEventController',
  function EditEventController($scope)  {
    $scope.saveEvent = function(event, newEventForm)  {
      console.log(newEventForm);
      // console.log(emailAddress);
      if(newEventForm.$valid) {
        window.alert('event' + event.name + ' saved!');
      }

    };

    $scope.cancelEdit = function()  {
      window.locaiton = "/EventDetails.html";
    }
  }
);
