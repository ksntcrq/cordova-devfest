(function () {
    'use strict';

    angular.module('conf.session', [])
        .controller('sessionController', ['DataService', '$cordovaToast', function (DataService, $cordovaToast) {

            var vm = this;

            vm.sessions = [];
            vm.categories = [];

            vm.getSessions = getSessions;
            vm.showDetails = showDetails;

            DataService.getSessions().then(
                function (sessions) {
                    vm.sessions = sessions.values;
                    vm.categories = sessions.categories;
                },
                function (error) {
                    $cordovaToast.showLongBottom('Une erreur est survenue...');
                });

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            function getSessions(category) {
                return vm.sessions.filter(function (session) {
                    return session.type === category;
                });
            }

            function showDetails(session) {
                app.navi.pushPage('modules/session/detail/details.html', {
                    session: session
                });
            }

        }]);

})();