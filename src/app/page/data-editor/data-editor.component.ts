import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Construction } from 'src/app/model/construction';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {

  data$: Observable<Construction> = this.ar.params.pipe(
    switchMap((params) => {
      return params['id'] === '0'
        ? of(new Construction())
        : this.httpService.get(params['id']);
    })
  );

  constructor(
    private httpService: HttpService<Construction>,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {console.log(this.ar.snapshot.params['id'])} // Getting id from params

  onSubmit(data: Construction) {
    if(data.id===0) {
      this.httpService.create(data).subscribe((data) => {
        this.router.navigate(['/', 'data']);
      })
    }else
    this.httpService.update(data).subscribe((data) => {
      this.router.navigate(['/', 'data']);
    });
  }

  logger(form: NgForm): void {
    console.log(form.controls)
  }

}
