///<reference path='../../lib/DefinitelyTyped/angularjs/angular.d.ts'/>
///<reference path='../../lib/DefinitelyTyped/jquery/jquery.d.ts'/>

declare var Slick:any;

module AngularTypescript.controller {
    export class Controller {

        private grid:any;

        constructor() {
            console.log("Controller");
            this.grid = this.createGrid();
        }

        private createGrid():any {
            var columns = [
                {id: "title", name: "Title", field: "title"},
                {id: "duration", name: "Duration", field: "duration"},
                {id: "%", name: "% Complete", field: "percentComplete"},
                {id: "start", name: "Start", field: "start"},
                {id: "finish", name: "Finish", field: "finish"},
                {id: "effort-driven", name: "Effort Driven", field: "effortDriven"}
            ];

            var options = {
                enableCellNavigation: true,
                enableColumnReorder: false,
                forceFitColumns: true
            };

            $(function () {
                var data = [];
                for (var i = 0; i < 500; i++) {
                    data[i] = {
                        title: "Task " + i,
                        duration: "5 days",
                        percentComplete: Math.round(Math.random() * 100),
                        start: "01/01/2009",
                        finish: "01/05/2009",
                        effortDriven: (i % 5 == 0)
                    };
                }

                return Slick.Grid("#grid", data, columns, options);
            })
        }
    }


}

/*******************************************************************/
