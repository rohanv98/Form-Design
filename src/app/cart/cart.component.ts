import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../service/data-service.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart;
  constructor(private data: DataServiceService) {
    this.cart = this.data.cart;
  }

  ngOnInit() {}
}
