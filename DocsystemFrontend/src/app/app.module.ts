import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { SideBarComponent } from "./general/side-bar/side-bar.component";
import { WorkTableComponent } from "./general/work-table/work-table.component";
import { CreateAssignmentFormComponent } from "./assignments/create-assignment-form/create-assignment-form.component";
import { UpdateAssignmentFormComponent } from "./assignments/update-assignment-form/update-assignment-form.component";
import { FindAssignmentFormComponent } from "./assignments/find-assignment-form/find-assignment-form.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DocumentViewComponent } from "./assignments/document-view/document-view.component";
import { AppRoutingModule } from "./app-routing.module";
import { EmployeesViewComponent } from "./employees/employees-view/employees-view.component";
import { ContextMenuComponent } from "./general/context-menu/context-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    WorkTableComponent,
    CreateAssignmentFormComponent,
    UpdateAssignmentFormComponent,
    FindAssignmentFormComponent,
    DocumentViewComponent,
    EmployeesViewComponent,
    ContextMenuComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule, AppRoutingModule],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
