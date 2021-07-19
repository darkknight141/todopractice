import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewCategoryPageRoutingModule } from './add-new-category-routing.module';

import { AddNewCategoryPage } from './add-new-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewCategoryPageRoutingModule
  ],
  declarations: [AddNewCategoryPage]
})
export class AddNewCategoryPageModule {}
