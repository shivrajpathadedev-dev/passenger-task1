import { Injectable } from '@angular/core';
import { Ipassenger, Ires } from '../model/passenger';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
passenger:Array<Ipassenger>=[{
        id: "1",
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
    }, {
        id: "2",
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
    }, {
        id: "3",
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null
    }, {
        id: "4",
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }]
    }, {
        id: "5",
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
    }];
  constructor() { }

  getdat():Observable<Ipassenger[]>{
    return of(this.passenger)
  }

  

  Removepassanger(id: string): Observable<Ires<Ipassenger>> {
    let getindex = this.passenger.findIndex(ele => ele.id === id)
    let pass = this.passenger.splice(getindex, 1)

    return of({
      msg: `The passanger with id ${pass[0].id} is Removed successfully!!!`,
      data: pass[0]
    })
  }

  updatepassenger(pass:Ipassenger):Observable<Ires<Ipassenger>>{
    let get_index=this.passenger.findIndex(t=>t.id===pass.id)
    this.passenger[get_index]=pass

    return of({
      msg:`the passenger ${pass.fullname} is updated successfully!!!`,
      data:pass
    })
  }

}
