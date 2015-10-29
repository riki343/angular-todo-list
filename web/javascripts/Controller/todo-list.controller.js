(function (angular) {
    angular.module('todo-list').controller('todoListController', Controller);

    Controller.$inject = [
        '$scope'
    ];

    function Controller($scope) {
        this.fake = [
            { 'title': 'Todo', 'checked': false, 'date': '2015-12-01' },
            { 'title': 'Todo', 'checked': false, 'date': '2015-12-01' },
            { 'title': 'Todo', 'checked': false, 'date': '2015-12-01' },
            { 'title': 'Todo', 'checked': false, 'date': '2015-12-01' },
            { 'title': 'Todo', 'checked': true,  'date': '2015-12-01' },
            { 'title': 'Todo', 'checked': false, 'date': '2015-12-01' },
            { 'title': 'Todo', 'checked': false, 'date': '2015-12-01' },
            { 'title': 'Todo', 'checked': false, 'date': '2015-12-01' },
            { 'title': 'Todo', 'checked': false, 'date': '2015-12-01' },
            { 'title': 'Todo', 'checked': true,  'date': '2015-12-01' },
            { 'title': 'Todo', 'checked': false, 'date': '2015-12-01' },
            { 'title': 'Todo', 'checked': false, 'date': '2015-12-01' },
            { 'title': 'Todo', 'checked': true,  'date': '2015-12-01' }
        ];
    }
})(angular);