import { NgFor } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { WatchlistComponent } from '../watchlist/watchlist.component';

@Component({
  selector: 'app-data-tables',
  standalone: true,
  imports: [WatchlistComponent, NgFor],
  templateUrl: './data-tables.component.html',
  styleUrl: './data-tables.component.less',
})
export class DataTablesComponent {
  title = 'Angular - DataTable';
  copyright: String = 'Copyright ';

  name = 'Angular ' + VERSION.major;

  myComponent = [
    {
      name: 'Angelica',
      position: 'Ramos',
      office: 'Chief Executive Officer (CEO)',
      startDate: 'London',
      salary: '$1,200,000',
    },
    {
      name: 'Bradley',
      position: 'Ramos',
      office: 'Chief Executive Officer (CEO)',
      startDate: 'Paris',
      salary: '$1,200,000',
    },
    {
      name: 'Brielle',
      position: 'Ramos',
      office: 'Chief Executive Officer (CEO)',
      startDate: 'Tokyo',
      salary: '$1,200,000',
    },
    {
      name: 'Bruno',
      position: 'Ramos',
      office: 'Chief Executive Officer (CEO)',
      startDate: 'San Francisco',
      salary: '$1,200,000',
    },
    {
      name: 'Caesar',
      position: 'Ramos',
      office: 'Chief Executive Officer (CEO)',
      startDate: 'New York',
      salary: '$1,200,000',
    },
  ];

  ngOnInit() {
    var currentDate = new Date();
    this.copyright = this.copyright + currentDate.getFullYear().toString();
  }
}
