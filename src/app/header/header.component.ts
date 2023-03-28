import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isDarkMode = true;

  constructor(private themeService: ThemeService){

  }

  ngOnInit(): void {
    this.toggleTheme();
  }


  toggleTheme() {
    this.isDarkMode
      ? this.themeService.switchTheme('bootstrap-dark')
      : this.themeService.switchTheme('bootstrap-light');
    /*
    (click)="changeTheme('bootstrap-light')
    (click)="changeTheme('bootstrap-dark')
    */
  }
}
