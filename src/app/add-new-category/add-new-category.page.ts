import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.page.html',
  styleUrls: ['./add-new-category.page.scss'],
})
export class AddNewCategoryPage implements OnInit {
  newCategory

  constructor(public modalCtlr: ModalController) { }

  ngOnInit() {
  }

  async dismis(){
    await this.modalCtlr.dismiss(this.newCategory)
  }

  async addCategories(){
    this.dismis()
    
  }
}
