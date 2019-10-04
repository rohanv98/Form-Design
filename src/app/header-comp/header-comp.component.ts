import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header-comp",
  templateUrl: "./header-comp.component.html",
  styleUrls: ["./header-comp.component.css"]
})
export class HeaderCompComponent implements OnInit {
  all = "All New Collections";
  person = {
    Owner: "Rohan V",
    Age: "24"
  };
  constructor() {}

  ngOnInit() {}
}
