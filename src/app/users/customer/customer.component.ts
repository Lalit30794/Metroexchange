import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.less',
})
export class CustomerComponent {
  searchTerm: string = '';
  isYes: boolean = true;
  isShow: boolean = true;
  masters: string[] = ['Master 1', 'Master 2', 'Master 3', 'Master 4'];

  tableData: any[] = [
    {
      name: 'John Doe',
      loginID: 'JD123',
      broker: 'Broker1',
      master: 'MasterA',
      percentage: '10%',
      sMasterCount: 5,
      masterCount: 12,
      dealerCount: 15,
      brokerCount: 20,
      clientCount: 50,
      onlyPosition: 'Yes',
      action: 'Edit',
      loginTime: '2024-09-29 10:00',
      loginIP: '192.168.1.1',
      joinTime: '2023-09-01 08:00',
    },
    {
      name: 'Alice Smith',
      loginID: 'AS456',
      broker: 'Broker2',
      master: 'MasterB',
      percentage: '15%',
      sMasterCount: 8,
      masterCount: 10,
      dealerCount: 20,
      brokerCount: 30,
      clientCount: 60,
      onlyPosition: 'No',
      action: 'View',
      loginTime: '2024-09-28 09:15',
      loginIP: '192.168.1.2',
      joinTime: '2023-08-15 09:00',
    },
    {
      name: 'Bob Johnson',
      loginID: 'BJ789',
      broker: 'Broker3',
      master: 'MasterC',
      percentage: '12%',
      sMasterCount: 7,
      masterCount: 11,
      dealerCount: 22,
      brokerCount: 25,
      clientCount: 65,
      onlyPosition: 'Yes',
      action: 'Edit',
      loginTime: '2024-09-27 14:30',
      loginIP: '192.168.1.3',
      joinTime: '2023-07-10 11:30',
    },
    {
      name: 'Carol Lee',
      loginID: 'CL001',
      broker: 'Broker4',
      master: 'MasterD',
      percentage: '8%',
      sMasterCount: 3,
      masterCount: 9,
      dealerCount: 19,
      brokerCount: 21,
      clientCount: 55,
      onlyPosition: 'No',
      action: 'Delete',
      loginTime: '2024-09-26 12:45',
      loginIP: '192.168.1.4',
      joinTime: '2023-06-21 12:45',
    },
    {
      name: 'David Kim',
      loginID: 'DK102',
      broker: 'Broker5',
      master: 'MasterE',
      percentage: '18%',
      sMasterCount: 9,
      masterCount: 14,
      dealerCount: 18,
      brokerCount: 27,
      clientCount: 70,
      onlyPosition: 'Yes',
      action: 'Edit',
      loginTime: '2024-09-25 10:00',
      loginIP: '192.168.1.5',
      joinTime: '2023-05-05 09:00',
    },
    {
      name: 'Eve Miller',
      loginID: 'EM200',
      broker: 'Broker6',
      master: 'MasterF',
      percentage: '11%',
      sMasterCount: 4,
      masterCount: 13,
      dealerCount: 16,
      brokerCount: 23,
      clientCount: 52,
      onlyPosition: 'No',
      action: 'View',
      loginTime: '2024-09-24 11:30',
      loginIP: '192.168.1.6',
      joinTime: '2023-04-10 07:15',
    },
    {
      name: 'Frank Lee',
      loginID: 'FL321',
      broker: 'Broker7',
      master: 'MasterG',
      percentage: '9%',
      sMasterCount: 2,
      masterCount: 6,
      dealerCount: 14,
      brokerCount: 19,
      clientCount: 45,
      onlyPosition: 'Yes',
      action: 'Edit',
      loginTime: '2024-09-23 14:45',
      loginIP: '192.168.1.7',
      joinTime: '2023-03-30 08:45',
    },
    {
      name: 'Grace Harris',
      loginID: 'GH567',
      broker: 'Broker8',
      master: 'MasterH',
      percentage: '17%',
      sMasterCount: 10,
      masterCount: 15,
      dealerCount: 21,
      brokerCount: 26,
      clientCount: 62,
      onlyPosition: 'No',
      action: 'Delete',
      loginTime: '2024-09-22 13:00',
      loginIP: '192.168.1.8',
      joinTime: '2023-02-14 09:30',
    },
    {
      name: 'Henry Wilson',
      loginID: 'HW890',
      broker: 'Broker9',
      master: 'MasterI',
      percentage: '14%',
      sMasterCount: 6,
      masterCount: 10,
      dealerCount: 17,
      brokerCount: 22,
      clientCount: 58,
      onlyPosition: 'Yes',
      action: 'View',
      loginTime: '2024-09-21 12:00',
      loginIP: '192.168.1.9',
      joinTime: '2023-01-01 10:00',
    },
    {
      name: 'Ivy Brown',
      loginID: 'IB999',
      broker: 'Broker10',
      master: 'MasterJ',
      percentage: '13%',
      sMasterCount: 5,
      masterCount: 8,
      dealerCount: 20,
      brokerCount: 24,
      clientCount: 63,
      onlyPosition: 'No',
      action: 'Edit',
      loginTime: '2024-09-20 09:45',
      loginIP: '192.168.1.10',
      joinTime: '2022-12-05 06:30',
    },
  ];

  filteredMasters: string[] = [];
  constructor() {}
  onSearchChange(): void {
    if (this.searchTerm.length > 0) {
      this.filteredMasters = this.masters.filter((master) =>
        master.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredMasters = [];
    }
  }

  selectMaster(master: string): void {
    this.searchTerm = master;
    this.filteredMasters = [];
  }
  toggleShow() {
    this.isShow = !this.isShow;
  }
}
