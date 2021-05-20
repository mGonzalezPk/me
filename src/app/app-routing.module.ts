import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./me/about-me/about-me.module').then(m => m.AboutMeModule) },
  { path: 'resume', loadChildren: () => import('./me/resume/resume.module').then(m => m.ResumeModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
