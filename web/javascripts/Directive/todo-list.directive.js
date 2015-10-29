(function (angular) {
    angular.module('todo-list').directive('todoList', Directive);

    Directive.$inject = [];

    function Directive() {
        return {
            'restrict': 'E',
            'templateUrl': '/javascripts/Directive/partials/todo-list.html',
            'link': Link,
            'scope': {
                'todos': '=todos'
            }
        };

        function Link($scope, $element, $attrs) {
            var modal           = $('#edit-modal');
            $scope.todoModel    = '';
            $scope.editModel    = '';

            $scope.addTodo = function (todo) {
                $scope.todos.unshift({ 'title': todo, 'checked': false, 'date': '2015-12-01' });
            };

            $scope.deleteTodo = function (index) {
                $scope.todos.splice(index, 1);
            };

            $scope.showModal = function (todo) {
                $scope.selectedTodo = todo;
                $scope.editModel = todo.title;
                modal.modal({'backdrop': 'static'});
                modal.modal('show');
            };

            $scope.editTodo = function (title) {
                $scope.selectedTodo.title = title;
                modal.modal('hide');
            };
        }
    }
})(angular);