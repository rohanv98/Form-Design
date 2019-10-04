import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { DataServiceService } from "./service/data-service.service";
import { Data } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  cart;
  constructor(
    private service: DataServiceService,
    private http: HttpClientModule
  ) {
    this.cart = this.service.cart;
  }

  title = "template1-task";
  a: number = 500;
  today: number = Date.now();

  ngOnInit() {
    this.service.adddata().subscribe(data => console.log(data));
  }
}
