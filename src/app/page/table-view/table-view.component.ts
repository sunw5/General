import { HttpService } from '../../service/http.service';
import { Component, OnInit } from '@angular/core';
import { Construction } from 'src/app/model/construction';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  data$: Observable<Construction[]> = this.http.getAll();
  dataDefault: Construction = new Construction();
  keys = Object.keys(this.dataDefault);

  constructor(
    private http: HttpService<Construction>,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onDelete(data: Construction) {
    this.http.delete(data).subscribe({
      next: data => {
        console.log(data);
        this.data$ = this.data$.pipe(map(d => {
          return d.filter(c => c.id !== data.id)
        }))
      }
    })
  }
}
