import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { employee } from '../home/state/home.state';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    constructor(private http:HttpClient){

    }

    getEmployee():Observable<employee[]>{
        return this.http.get<employee[]>('http://localhost:5000/employee/')
        .pipe(map((data)=>{
            const employee:employee[]=[];
            for(let key in data){
                employee.push({...data[key],id:+key+1} )
            }
            return employee;
        }))
    }
}