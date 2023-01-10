import { Component, OnInit } from '@angular/core';
import { Vuz, VuzService } from '../vuz.service';
import { VuzComponent } from '../vuz/vuz.component';

@Component({
  selector: 'app-podbor',
  templateUrl: './podbor.component.html',
  styleUrls: ['./podbor.component.css']
})
export class PodborComponent implements OnInit {

  searchSubj: string = "";
  searchPoint: number = 0;
  vuzList: Vuz[] = [];

  constructor(private vuzService: VuzService) { this.vuzList = this.vuzService.getVuzes(); }

  ngOnInit(): void {
    
  }

  search() {
    this.vuzList = this.vuzList.filter(vuz => {
      return vuz.subj === this.searchSubj && vuz.point >= this.searchPoint;
    });
  }

}
