import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateAssignmentFormComponent } from "./assignments/create-assignment-form/create-assignment-form.component";
import { DocumentViewComponent } from "./assignments/document-view/document-view.component";
import { EmployeesViewComponent } from "./employees/employees-view/employees-view.component";
import { UpdateAssignmentFormComponent } from "./assignments/update-assignment-form/update-assignment-form.component";

const routes: Routes = [
  { path: "employees", component: EmployeesViewComponent },
  { path: "employees/:id", component: EmployeesViewComponent },
  {
    path: "assignments/:id/update",
    component: UpdateAssignmentFormComponent,
    pathMatch: "full",
  },
  {
    path: "assignments/create",
    component: CreateAssignmentFormComponent,
    pathMatch: "full",
  },

  {
    path: "assignments/:id",
    component: DocumentViewComponent,
    pathMatch: "full",
  },

  { path: "assignments", component: DocumentViewComponent, pathMatch: "full" },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
