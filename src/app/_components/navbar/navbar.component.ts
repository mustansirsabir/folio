import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  shouldUseDarkTheme = false;

  constructor() {
    //consistent light mode for page change
    
    if (!localStorage.getItem('selectedTheme')) {
      localStorage.setItem('lightMode', 'light');
      this.shouldUseDarkTheme = false;
    } else {
      if (localStorage.getItem('selectedTheme') == 'light') {
        var app = document.getElementsByTagName('HTML')[0];
        app.setAttribute('light-mode', 'light');
        this.shouldUseDarkTheme = true;
        //to add dark theme to nav bar after its been loaded
        window.addEventListener('load', function () {
          var nav = document.getElementById('navbar');
          // nav.classList.remove('dark-theme');
          // document.getElementById('dark_toggler').checked = false;
        });

        var sc = document.getElementsByClassName('socialicon');
        for (var i = 0; i < sc.length; i++) {
          sc[i].classList.remove('dsc');
        }
      }
    }
  }

  toggle_theme() {
    if (this.shouldUseDarkTheme) {
      localStorage.setItem('lightMode', 'dark');
      this.shouldUseDarkTheme = true;
    } else {
      localStorage.setItem('lightMode', 'light');
      this.shouldUseDarkTheme = false;
    }

    var app = document.getElementsByTagName('HTML')[0];
    var nav = document.getElementById('navbar');
    if (localStorage.getItem('selectedTheme') == 'dark') {
      localStorage.setItem('selectedTheme', 'light');
      app.setAttribute('light-mode', 'light');
      // nav.classList.remove('dark-theme');
      var sc = document.getElementsByClassName('socialicon');
      for (var i = 0; i < sc.length; i++) {
        sc[i].classList.remove('dsc');
      }
    } else {
      // nav.classList.add('dark-theme');
      // localStorage.lightMode = 'dark';
      app.setAttribute('light-mode', 'dark');
      var sc = document.getElementsByClassName('socialicon');
      for (var i = 0; i < sc.length; i++) {
        sc[i].classList.add('dsc');
      }
    }

    // updating the swiper bullets
    // updateColorOfSwiperBullets(localStorage.getItem('lightMode'));
  }

  // function to update swiper bullets
  updateColorOfSwiperBullets(lightMode: string | null) {
    document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet) => {
      if (lightMode == 'light') {
        // bullet.style.backgroundColor = 'blue';
      } else {
        // bullet.style.backgroundColor = 'white';
      }
    });
  }
}
