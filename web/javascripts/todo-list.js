(function (angular) {
    angular
        .module('todo-list', [
            'ui.router',
            'ngAnimate'
        ])
        .config(appConfig)
    ;

    appConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];
    function appConfig($stateProvider, $urlRouterProvider) {
        var templates = '/javascripts/Templates/';
        $stateProvider
            .state('home', {
                'url': '/',
                'templateUrl': templates + 'home.html'
            })
        ;

        $urlRouterProvider.otherwise('/');
    }
})(angular);