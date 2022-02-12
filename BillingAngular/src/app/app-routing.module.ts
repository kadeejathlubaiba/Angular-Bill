import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import{LoginComponent} from './login/login.component'
import{AdminComponent} from './admin/admin.component'
import { ProductComponent } from './product/product.component';
import { AuthGuard } from './shared/auth.guard';
import { ReportlistComponent } from './reportlist/reportlist.component';
import { ListMobComponent } from './list-mob/list-mob.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'display',component:DisplayComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'login',component:LoginComponent},
  {path:'prod',component:ProductComponent},
  {path:'prod/:Id',component:ProductComponent},
  {path:"list",component:ReportlistComponent},
  {path:"listmob",component:ListMobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
