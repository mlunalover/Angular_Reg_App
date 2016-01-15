'use strict';

eventsApp.controller('EventController',
    function EventController($scope)    {

        $scope.snippit = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color:'red'};

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/14/16',
            time: '10:30 am',
            location:   {
                address: 'Google',
                city: 'Mountain View',
                state: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
              {
                name: 'Class 1',
                creatorName: 'Bob',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'In this session you will learn....',
                upVoteCount: 0
              },
              {
                name: 'Class 2',
                creatorName: 'John',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'In this session you will learn....',
                upVoteCount: 0
              },
              {
                name: 'Class 3',
                creatorName: 'Mark',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'In this session you will learn....',
                upVoteCount: 0
              }
            ]
        };

        $scope.upVoteSession = function(session)  {
          session.upVoteCount++;
        };

        $scope.downVoteSession = function(session)  {
          session.upVoteCount--;
        };

    });
