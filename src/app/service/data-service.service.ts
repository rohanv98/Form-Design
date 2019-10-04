import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { list } from "./data";
import { from } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  productList = list;
  cart = [];
  constructor(private http: HttpClient) {}

  adddata() {
    const data = {
      title: "VIVO V12",
      demo: "(Nebula Purple, 64 Gb) (6 Gb Ram)",
      imageUrl:
        "https://www.linkdecode.com/wp-content/uploads/2018/08/Vivo-V9-Blue-Sapphire-2.jpg",
      price: 18000,
      category: "mobile"
    };
    return this.http.post<any>("http://localhost:3000/lists", data);
  }
}
