/**
 * Created by nico on 16/06/15.
 */
angular.module('MainApp', [])

function mainController($scope, $http) {
    $scope.newMusica = {};
    $scope.music = {};
    $scope.selected = false;

    // Obtenemos todos los datos de la base de datos
    $http.get('/api/music').success(function(data) {
        $scope.music = data;
    })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Función para registrar a una musica
    $scope.registrarMusica = function() {
        $http.post('/api/music', $scope.newMusic)
            .success(function(data) {
                $scope.newMusic = {}; // Borramos los datos del formulario
                $scope.music = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectMusic = function(music) {
        $scope.newMusic = music;
        $scope.selected = true;
        console.log($scope.newMusic, $scope.selected);
    };
}