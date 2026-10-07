// import { Component } from '@angular/core';
// import { SiteHeaderComponent } from '../../site-header/site-header.component';
// import { SiteFooterComponent } from '../../site-footer/site-footer.component';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [SiteHeaderComponent, SiteFooterComponent],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss',
// })
// export class HomeComponent {}

import { Component } from '@angular/core';
import { SiteHeaderComponent } from '../../site-header/site-header.component';
import { SiteFooterComponent } from '../../site-footer/site-footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
