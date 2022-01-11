import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'person-add'
    },
    {
      title: 'Users',
      url: '/users',
      icon: 'people'
    },
    { title: 'Articles',
      url: '/articles', 
      icon: 'newspaper'
    },
  ]; 
  //  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
