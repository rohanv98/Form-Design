import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { Comp1Component } from "./comp1/comp1.component";
import { HeaderCompComponent } from "./header-comp/header-comp.component";
import { StylingDirectiveDirective } from "./styling-directive.directive";
import { FooterCompComponent } from "./footer-comp/footer-comp.component";
import { BannerAboutusCompComponent } from "./banner-aboutus-comp/banner-aboutus-comp.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { NofoundComponent } from "./nofound/nofound.component";
import { FormCompComponent } from "./L-form-comp/form-comp.component";
import { SFormCompComponent } from "./s-form-comp/s-form-comp.component";
import { Pipe1Pipe } from "./pipe/pipe1.pipe";
import { CustompipePipe } from "./pipe/custompipe.pipe";
import { CartComponent } from "./cart/cart.component";

const connection: Routes = [
  { path: "", component: BannerAboutusCompComponent, pathMatch: "full" },
  { path: "product", component: Comp1Component },
  { path: "cart", component: CartComponent },
  { path: "productdetails/:dynamic", component: ProductDetailsComponent },
  { path: "login-page", component: FormCompComponent },
  { path: "signup-page", component: SFormCompComponent },
  { path: "**", component: NofoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    HeaderCompComponent,
    StylingDirectiveDirective,
    FooterCompComponent,
    BannerAboutusCompComponent,
    ProductDetailsComponent,
    NofoundComponent,
    FormCompComponent,
    SFormCompComponent,
    Pipe1Pipe,
    CustompipePipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(connection),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
