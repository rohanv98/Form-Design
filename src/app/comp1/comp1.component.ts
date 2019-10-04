import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataServiceService } from "../service/data-service.service";
//import {DataService} from '../service/data.service';
@Component({
  selector: "app-comp1",
  templateUrl: "./comp1.component.html",
  styleUrls: ["./comp1.component.css"]
})
export class Comp1Component implements OnInit {
  public data: any;

  constructor(private router: Router, private dataService: DataServiceService) {
    this.data = dataService.productList;
  }
  handleNavigate(arg) {
    this.router.navigate(["/productdetails", arg]);
  }

  ngOnInit() {}
  handleWishList(arg) {
    this.dataService.cart.push(arg);
    alert(arg.title);
  }
}
