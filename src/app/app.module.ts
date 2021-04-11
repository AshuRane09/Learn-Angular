import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { TakeinputComponent } from './takeinput/takeinput.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBootstrapComponent } from './ngx-bootstrap/ngx-bootstrap.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { RoutesComponent } from './routes/routes.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { ProductComponent } from './routes/product/product.component';
import { ContactComponent } from './routes/contact/contact.component';
import { LoginComponent } from './routes/login/login.component';
import { Error404Component } from './routes/error404/error404.component';
import { LaptopComponent } from './routes/product/laptop/laptop.component';
import { MobileComponent } from './routes/product/mobile/mobile.component';
import { CardComponent } from './routes/contact/card/card.component';
import { ParentComponent } from './routes/parent/parent.component';
import { ChildComponent } from './routes/parent/child/child.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  {path: 'buy-products', component: ParentComponent},
  { path: 'products', component: ProductComponent, children: [
      {path : 'laptop', component: LaptopComponent},
      {path: 'mobile', component: MobileComponent}
    ]},
  { path: '**', component: Error404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    NgclassComponent,
    TakeinputComponent,
    TwoWayBindingComponent,
    NgxBootstrapComponent,
    NgifComponent,
    NgforComponent,
    RoutesComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    LoginComponent,
    Error404Component,
    LaptopComponent,
    MobileComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
