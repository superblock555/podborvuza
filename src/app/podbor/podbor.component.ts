import { Component, OnInit } from '@angular/core';
import { Vuz, VuzService } from '../vuz.service';
import { VuzComponent } from '../vuz/vuz.component';

@Component({
  selector: 'app-podbor',
  templateUrl: './podbor.component.html',
  styleUrls: ['./podbor.component.css']
})
export class PodborComponent implements OnInit {
  isLoading = false;

  searchSubj: string = "";
  searchPoint: number = 0;
  vuzList: Vuz[] = [];

  constructor(private vuzService: VuzService) { this.vuzList = this.vuzService.getVuzes(); }

  ngOnInit(): void {

  }

  search() {
    console.log(this.searchSubj);
    console.log(this.searchPoint);
    console.log();

    this.isLoading = true

    setTimeout(() => {
      this.isLoading = false;
      this.vuzList = this.vuzService.getVuzes().filter(vuz => {
        return vuz.subj === this.searchSubj && vuz.point <= this.searchPoint;
      }).sort((a, b) => {
        if (a.point > b.point)
          return -1;
        if (a.point < b.point)
          return 1;
        return 0;
      });
    }, 1000);



  }

}
