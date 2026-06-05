import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/model/passenger';
import { PassengerService } from 'src/app/service/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  passdata!:Array<Ipassenger>
  checkeddata!:Array<Ipassenger>
  constructor(
    private _passenger:PassengerService
  ) { }

  ngOnInit(): void {
    this._passenger.getdat().subscribe(res=>{
      this.passdata=res
    })

    this._passenger.getcheckdata().subscribe(res=>{
      this.checkeddata=res
    })
  }

  trackfun(index:number,item:Ipassenger){
    return item.id
  }

}
