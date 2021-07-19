import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewCategoryPage } from './add-new-category.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewCategoryPageRoutingModule {}
