import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { LinksComponent } from './links/links.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'links', component: LinksComponent },
  { path: 'accomplishments', component: AccomplishmentsComponent },
  { path: 'path/404', component: NotFoundComponent },
  { path: '**', redirectTo: 'path/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
