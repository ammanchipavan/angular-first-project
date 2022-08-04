import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Sample Recipe to test Angular', 'https://th.bing.com/th/id/OIP.cNOEC57XDOl4wT-RkeWujQHaLH?pid=ImgDet&rs=1'),
    new Recipe('Test Recipe', 'Sample Recipe to test Angular', 'https://th.bing.com/th/id/OIP.cNOEC57XDOl4wT-RkeWujQHaLH?pid=ImgDet&rs=1')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
