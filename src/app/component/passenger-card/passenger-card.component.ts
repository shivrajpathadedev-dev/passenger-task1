import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Ipassenger } from 'src/app/model/passenger';
import { PassengerService } from 'src/app/service/passenger.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {
@Input() passobj!:Ipassenger
isineditmode:boolean=false
@ViewChild('fullname') fullname!:ElementRef
  constructor(
    private passenger:PassengerService,
    private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onremove(id:string){
    this.passenger.Removepassanger(id).subscribe(res=>{
       this._snackbar.opensnackbar(res.msg)
    })
  }

  onupdate(){
   this.passobj.fullname=this.fullname.nativeElement.value
   this.passenger.updatepassenger(this.passobj)
   this.isineditmode=false
  }
}
