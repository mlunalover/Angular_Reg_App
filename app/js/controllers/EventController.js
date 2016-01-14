'use strict';

eventsApp.controller('EventController',
    function EventController($scope)    {

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/14/16',
            time: '10:30 am',
            location:   {
                address: 'Google',
                city: 'Mountain View',
                state: 'CA'
            }
        }
    })