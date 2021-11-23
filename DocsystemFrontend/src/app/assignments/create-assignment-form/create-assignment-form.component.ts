import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  ASSIGNMENTS_API_URL,
  CREATE_URL_ADDITION,
} from "src/app/share/constants";

@Component({
  selector: "app-create-assignment-form",
  templateUrl: "./create-assignment-form.component.html",
  styleUrls: ["./create-assignment-form.component.scss"],
})
export class CreateAssignmentFormComponent implements OnInit {
  assignment: Assignment;
  constructor(private router: Router) {}
  ngOnInit(): void {
    //? Нужно что-то с этим делать
    this.assignment = {
      id: -1,
      subject: "",
      author: {
        firstname: "",
        surname: "",
        patronymic: "",
        position: "",
      },
      deadline: "",
      controlSign: false,
      operateSign: false,
    };
  }

//! Чтобы обновился список представлений после добавления нового, нужно перезагрузить страницу
  onSubmit() {
    let formData = new FormData();
    for (let entry in this.assignment) {
      formData.append(entry, this.assignment[entry]);
      //TODO хорошо бы позаботиться о костыле
      formData.append("authorId", this.assignment.author.id.toString());
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", ASSIGNMENTS_API_URL + CREATE_URL_ADDITION);
    xhr.send(formData);

    xhr.onload = () => alert("Результат создания документа: " + xhr.response);
    this.router.navigate(["assignments"]);
  }
}
