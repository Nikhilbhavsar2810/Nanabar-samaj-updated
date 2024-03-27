import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  /**
   * Life Cycle Method
   */
  constructor(private el: ElementRef, private router: Router) { }

  /**
   * Angular Life Cycle Method
   */
  ngOnInit(): void {

    let alldrpdwn = document.querySelectorAll('.dropdow-container');
    console.log(alldrpdwn, 'alldrpdwn#');
    alldrpdwn.forEach((item: any) => {
      const a = item.parentElement?.querySelector('a:first-child');
      console.log(a, 'a#');
      a.addEventListener('click', (e: any) => {
        e.preventDefault();
        this.el.nativeElement.classList.toggle('active');
        item.classList.toggle('show');
      });

    });

  }


  // responsivemenu 
  responsiveMenu: any;
  // responsivemaincontent
  responsiveContent: any;
  defaultStatus = true;
  openNav(status: any) {
    if (status === this.defaultStatus) {
      this.responsiveMenu = {
        'display': 'block'
      }
      this.responsiveContent = {
        'margin-left': '150px'
      }
      this.defaultStatus = false;
    } else {
      this.responsiveMenu = {
        'display': null
      }
      this.responsiveContent = {
        'margin-left': null
      }
      this.defaultStatus = true;
    }

  }


  onGouser() {
    this.router.navigate(['/userlist'])
  }

}
