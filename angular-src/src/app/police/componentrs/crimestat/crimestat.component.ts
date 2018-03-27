import { Component, OnInit } from '@angular/core';
import {PoliceserviceService} from '../../services/policeservice.service';
import { Complaint } from '../../model/crime';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crimestat',
  templateUrl: './crimestat.component.html',
  styleUrls: ['./crimestat.component.css']
})
export class CrimestatComponent implements OnInit {
  public username: String;
  public pid:String;
 public crimecount:any;
  constructor(private policeservice:PoliceserviceService,private router:Router) { 

    var qw=localStorage.getItem('police');
    var use = JSON.parse(qw);
    this.username=use.username;
    this.pid=use.id;
    console.log(this.pid);
    
  }

  public barChartData =  {
    chartType: 'ColumnChart',
    dataTable: [
    ],
    options: {'title': 'CRIME RECORDS'},
  };

  public pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
    ],
    options: {'title': 'CRIME RECORDS'},
  };


 ngOnInit() {
  this.policeservice.getCrimeStat(this.pid).subscribe((crimes)=>{
    this.crimecount=crimes;
    console.log("count");
    console.log(this.crimecount);
    

    this.barChartData.dataTable.push(['Crime Type', 'Total crime count']);
    this.barChartData.dataTable.push(["Murder" ,this.crimecount.Murder]);
    this.barChartData.dataTable.push(["Robbery" ,this.crimecount.Robbery]);
    this.barChartData.dataTable.push(["Drugs_Alcohol" ,this.crimecount.Drugs_Alcohol]);
    this.barChartData.dataTable.push(["Domestic_voilence" ,this.crimecount.Domestic_voilence]);
    this.barChartData.dataTable.push(["sex_crimes" ,this.crimecount.sex_crimes]);
    this.barChartData.dataTable.push(["Drink_Drive" ,this.crimecount.Drink_Drive]);
    this.barChartData.dataTable.push(["vandalism" ,this.crimecount.vandalism]);
    this.barChartData.dataTable.push(["smuggling" ,this.crimecount.smuggling]);
    this.barChartData.dataTable.push(["kidnapping" ,this.crimecount.kidnapping]);
    this.barChartData.dataTable.push(["cybercrime" ,this.crimecount.cybercrime]);
    this.barChartData.dataTable.push(["poaching" ,this.crimecount.poaching]);


    //insert in piechart
      


    this.pieChartData.dataTable.push(['Crime Type', 'Total crime count']);
    this.pieChartData.dataTable.push(["Murder" ,this.crimecount.Murder]);
    this.pieChartData.dataTable.push(["Robbery" ,this.crimecount.Robbery]);
    this.pieChartData.dataTable.push(["Drugs_Alcohol" ,this.crimecount.Drugs_Alcohol]);
    this.pieChartData.dataTable.push(["Domestic_voilence" ,this.crimecount.Domestic_voilence]);
    this.pieChartData.dataTable.push(["sex_crimes" ,this.crimecount.sex_crimes]);
    this.pieChartData.dataTable.push(["Drink_Drive" ,this.crimecount.Drink_Drive]);
    this.pieChartData.dataTable.push(["vandalism" ,this.crimecount.vandalism]);
    this.pieChartData.dataTable.push(["smuggling" ,this.crimecount.smuggling]);
    this.pieChartData.dataTable.push(["kidnapping" ,this.crimecount.kidnapping]);
    this.pieChartData.dataTable.push(["cybercrime" ,this.crimecount.cybercrime]);
    this.pieChartData.dataTable.push(["poaching" ,this.crimecount.poaching]);
    

  });
  
}
}
