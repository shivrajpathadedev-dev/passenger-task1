

export interface Ipassenger{
      id: string;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number | null;
    children: null | Ipasschild[];
}

export interface Ipasschild{
    name:string;
    age:number;
}

export interface Ires<T>{
    msg:string;
    data:T
}

