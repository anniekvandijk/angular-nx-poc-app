import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TableDataSource, TableItem } from './table-datasource';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'angular-nx-poc-app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, NgStyle ]
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  mouseDownPressed = false;
  selectedRows: TableItem[] = [];

  constructor() {
    this.dataSource = new TableDataSource();
  }

  mousedown(row: TableItem) {
    this.mouseDownPressed = true;
    this.addSelectedRow(row);
  }

  mouseover(row: TableItem) {
    if (this.mouseDownPressed) {
      this.addSelectedRow(row);
    }
  }

  mouseup() {
    this.mouseDownPressed = false;
  }


  addSelectedRow(row: TableItem) {
    if (!this.selectedRows.includes(row)) {
      console.log('add row', this.selectedRows);
      this.selectedRows.push(row);
    } else {
      console.log('remove row', this.selectedRows);
      this.selectedRows = this.selectedRows.filter(r => r !== row);
    }
  }

  isSelected(row: TableItem): boolean {
    return this.selectedRows.includes(row);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
