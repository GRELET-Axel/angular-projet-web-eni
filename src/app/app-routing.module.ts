import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [  
  // { path: 'profil', component: ProfilComponent, data:{requiresLogin: true} },
  // { path: 'ville', component: VilleListComponent , data:{requiresLogin: true}},
  // { path: 'accueil', component: AccueilComponent, data:{requiresLogin: true}},
  // { path: 'campus', component: CampusComponent, data:{requiresLogin: true} },
  // { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
