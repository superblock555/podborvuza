import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuzService {

  private vuzList: Vuz[] = [
    {vuzname: 'University 1', subj: 'Math', point: 80},
    {vuzname: 'University 2', subj: 'Physics', point: 75},
    {vuzname: 'University 3', subj: 'Computer Science', point: 90},
    {vuzname: 'University 4', subj: 'Math', point: 70},
    {vuzname: 'University 5', subj: 'Physics', point: 85},
  ];

  constructor() { }

  addVuz(vuz: Vuz) {
    this.vuzList.push(vuz);
  }

  getVuzes() {
    return this.vuzList;
  }
}

export class Vuz {
  vuzname: string = "";
  subj: string = "";
  point: number = 0;
}