import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ac1Component } from './ac1/ac1.component';
import { AceuilComponent } from './aceuil/aceuil.component';
import { HomeComponent } from './home/home.component';
import { InterfaceComponent } from './interface/interface.component';
import { JoomlaComponent } from './joomla/joomla.component';
import { ProfilComponent } from './profil/profil.component';
//import { AceuilComponent } from './aceuil/aceuil.component';
//import { Ac1Component } from './ac1/ac1.component';

const routes: Routes = [{path:'ac1',component:Ac1Component},
{path:'profil', component:ProfilComponent},
{path:'aceuil',component:AceuilComponent},
{path:'joomla/:id',component:JoomlaComponent},
{path:'interface',component:InterfaceComponent}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
