import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ASSIGNMENTS_API_URL,
  UPDATE_URL_ADDITION,
} from "src/app/share/constants";

@Component({
  selector: "app-update-assignment-form",
  templateUrl: "./update-assignment-form.component.html",
  styleUrls: ["./update-assignment-form.component.scss"],
})
export class UpdateAssignmentFormComponent implements OnInit {
  assignment: Assignment;
  id: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
    fetch(ASSIGNMENTS_API_URL + this.id)
      .then((response) => response.json())
      .then((result) => {
        this.assignment = result;
        this.assignment.author.id = result.author.id;
        this.assignment.deadline = new Date(result.deadline)
          .toISOString()
          .substring(0, 10);
      });
  }

  onSubmit() {
    let formData = new FormData();
    for (let entry in this.assignment) {
      formData.append(entry, this.assignment[entry]);
      formData.append("authorId", this.assignment.author.id.toString());
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", ASSIGNMENTS_API_URL + UPDATE_URL_ADDITION + this.id);
    xhr.send(formData);

    xhr.onload = () => alert("Результат редактирования: " + xhr.response);
    this.router.navigate(["assignments"]);
  }
}
