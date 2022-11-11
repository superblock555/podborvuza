import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PodborComponent } from './podbor/podbor.component';
import { VuziComponent } from './vuzi/vuzi.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'podbor', component: PodborComponent },
  { path: 'vuzi', component: VuziComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
