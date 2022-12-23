import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalMarksService {
  deleteStudentMark(internalmarksId: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  public internalmarksRegisterService(internalmarks:any,staffId:number)
  {
return this.http.post("http://localhost:8089/api/internalmarks/"+staffId,internalmarks,{responseType:'text' as 'json'})
  }
  public getInternalMarks()
  {
    return this.http.get("http://localhost:8089/api/internalmarks/getAllInternalMarks");
  }

  public getInternalMarksById(id:any)
  {
    return this.http.get("http://localhost:8089/api/internalmarks/getInternalMarks/"+id);

  }
  public deleteInternalMarks(id:any)
  {
    return this.http.delete("http://localhost:8089/api/internalmarks/deleteInternalMarks/"+id);
  }
}
