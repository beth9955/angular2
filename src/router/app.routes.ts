/**
 * Created by bethd on 2017-03-31.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app/app.component';
const routes: Routes = [
  { path:'',  pathMatch: 'full', redirectTo: 'main'},
  { path:'main', component:AppComponent},
  { path: 'board',  loadChildren:'../app/board/board.module#BoardModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [AppComponent];
