import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
{ path: "view", component: TableComponent }, 
{ path: "", component: FormComponent }, 
{ path: "edit", component: EditComponent },
{path: "delete", component:ModalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
