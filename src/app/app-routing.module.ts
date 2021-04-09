import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { MissionListComponent } from './mission-list/mission-list.component';

const routes: Routes = [{ path: '', redirectTo: 'missionlist', pathMatch:'full' },{ path: 'missionlist', component: MissionListComponent },
{ path :'missiondetails/:id', component: MissionDetailComponent}];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
