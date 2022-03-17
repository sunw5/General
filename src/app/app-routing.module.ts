import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataEditorComponent } from './page/data-editor/data-editor.component';
import { HomeComponent } from './page/home/home.component';
import { TableViewComponent } from './page/table-view/table-view.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'data',
    component: TableViewComponent
  },
  {
    path: 'data-editor/:id',
    component: DataEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
