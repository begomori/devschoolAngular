import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-navbar',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-brand mb-0 h1">DevShop</div>
    <a class="navbar-brand" href="#">Home</a>
    <a class="navbar-brand" href="#">Favourites</a>
    <a class="navbar-brand" href="#">Profile</a>
    <div>
      <select>
        <option *ngFor="let language of languages">{{language}}</option>
      </select>
    </div>
  </nav>
  `
})
export class NavbarComponent {

  languages = ['spanish', 'english'];

}
