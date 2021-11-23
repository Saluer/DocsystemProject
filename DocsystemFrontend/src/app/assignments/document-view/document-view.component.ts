import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ASSIGNMENTS_API_URL } from "src/app/share/constants";

@Component({
  selector: "app-document-view",
  templateUrl: "./document-view.component.html",
  styleUrls: ["./document-view.component.scss"],
})

export class DocumentViewComponent implements OnInit {
  id: number | undefined;
  assignments: Assignments;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.assignments = [];
      let url = ASSIGNMENTS_API_URL;

      if (this.id) url = url + this.id;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          if (Array.isArray(result)) {
            this.assignments = result;
          } else {
            this.assignments.push(result);
          }
        });
    });
  }
}
