import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
 
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()], 
     
})

export class DashboardComponent implements OnInit {
    
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public migrations: Array<any> = [];

 // Doughnut
    public doughnutChartLabels: string[] = ['Complete', 'Pending', 'Error'];
    public doughnutChartData: number[] = [350, 100, 25];
    public doughnutChartType: string = 'doughnut';
     public doughnutChartOptions: any = {
         cutoutPercentage: 85
     }
    public doughnutChartColors: Array<any> = [{
        backgroundColor:["#96ef73", "#f9f772", "#f40000", "#FFFCC4", "#B9E8E0"] 
      },
     { borderColor:["#26b721", "#f9f772", "#f40000", "#FFFCC4", "#B9E8E0"] }
    ];
    constructor(  ) {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }

    

    ngOnInit() {

        

    }
   

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
