import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-context-menu",
  templateUrl: "./context-menu.component.html",
  styleUrls: ["./context-menu.component.scss"],
})
export class ContextMenuComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  deleteHandler() {
    if (!confirm("Вы уверены, что хотите удалить запись?")) return;
    let xhr = new XMLHttpRequest();
    xhr.open(
      "DELETE",
      "http://localhost:8080/api/assignments/delete/" + this.id
    );
    xhr.send();

    xhr.onload = () => alert("Удаление прошло успешно");
    this.router.navigate(["assignments"]);
  }
}
