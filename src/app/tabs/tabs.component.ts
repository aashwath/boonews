import { Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  tabLinks = ['india', 'global', 'entertainment', 'business']
}
