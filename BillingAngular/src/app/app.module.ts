import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DisplayComponent } from './display/display.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProductService } from './shared/product.service';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from './shared/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductComponent } from './product/product.component';
import {AuthInterceptor} from './shared/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReportlistComponent } from './reportlist/reportlist.component';
import { ListMobComponent } from './list-mob/list-mob.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    LoginComponent,
    AdminComponent,
    ProductComponent,
    ReportlistComponent,
    ListMobComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [ProductService,AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true 
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
