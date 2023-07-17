import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TableDataSource, TableItem } from './table-datasource';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'angular-nx-poc-app-table-shift-select',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, NgStyle ]
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource: TableDataSource;

  displayedColumns = ['select', 'id', 'name'];
  selectedItems = new Set<TableItem>();
  lastSelectedRowIndex: number | null = null;

  constructor() {
    this.dataSource = new TableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  isItemSelected(row: TableItem): boolean {
    return this.selectedItems.has(row);
  }

  toggleItemSelection(row: TableItem): void {
    if (this.isItemSelected(row)) {
      this.selectedItems.delete(row);
    } else {
      this.selectedItems.add(row);
    }
  }

  masterToggle() {
    if (this.selectedItems.size === this.dataSource.data.length && this.dataSource.data.length > 0) {
      this.selectedItems.clear();
    } else {
      this.dataSource.data.forEach(row => this.selectedItems.add(row));
    }
  }

  onMouseDown(event: MouseEvent, row: TableItem) {
    event.stopPropagation();


      const rowIndex = this.dataSource.data.indexOf(row);
      if (event.shiftKey && this.lastSelectedRowIndex !== null) {
        const start = Math.min(this.lastSelectedRowIndex, rowIndex);
        const end = Math.max(this.lastSelectedRowIndex, rowIndex);
        for (let i = start; i < end; i++) {
          this.selectedItems.add(this.dataSource.data[i]);
        }
      
    } else {
      this.lastSelectedRowIndex = this.dataSource.data.indexOf(row);
    }
  }
}
