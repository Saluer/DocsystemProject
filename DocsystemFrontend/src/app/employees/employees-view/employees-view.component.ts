import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EMPLOYEES_API_URL } from "src/app/share/constants";

@Component({
  selector: "app-employees-view",
  templateUrl: "./employees-view.component.html",
  styleUrls: ["./employees-view.component.scss"],
})
export class EmployeesViewComponent implements OnInit {
  id: number | undefined;
  employees: Employees;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.employees = [];
      let url = EMPLOYEES_API_URL;

      if (this.id) url = url + this.id;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          if (Array.isArray(result)) {
            this.employees = result;
          } else {
            this.employees.push(result);
          }
        });
    });
  }
}
