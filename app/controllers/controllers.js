
(function(){
	angular.module('notas.controller', [])

    .controller('estudiantesController', function(){
            this.name="hola mundo",
            this.productos ={
                "notas":[
                    {
                        "nombre": "Juan",
                        "curso": "Matematicas",
                        "comentarios": "Buen estudiante",
                        "nota": 4.0
                    },
                    {
                        "nombre": "Pedro",
                        "curso": "Matematicas",
                        "comentarios": "Regular estudiante",
                        "nota": 3.0
                    },
                    {
                        "nombre": "Luis",
                        "curso": "Matematicas",
                        "comentarios": "mal estudiante",
                        "nota": 1.5
                    }
                ]            
            }
            
        });



})();
