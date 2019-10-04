import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "./service/data";
import { DataServiceService } from "../service/data-service.service";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent {
  list: any;

  it;
  constructor(
    private route: ActivatedRoute,
    private service: DataService,
    private datas: DataServiceService
  ) {
    const params = this.route.snapshot.params["dynamic"];
    alert(params);
    console.log(params);
    this.list = this.service.list.find(el => el.title == params);
    this.it = this.datas.productList;
  }

  cartitems(arg) {
    this.datas.cart.push(arg);
    alert(arg.title);
  }
}
