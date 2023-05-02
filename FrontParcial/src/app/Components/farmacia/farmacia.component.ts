import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.component.html',
  styleUrls: ['./farmacia.component.css']
})
export class FarmaciaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  data: Array<any>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api:ApiService, public tableService: TableService){}

  ngOnInit(): void {
      this.GetFarmacias();
      var response=this.api.getAll("Farmacias")
      console.log(response)
  }

  ngAfterViewInit(): void {
   
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }

  public async GetFarmacias() {
    this.data = await this.api.getAll("Farmacias");
    console.log(this.data[0]);
    this.loadTable(this.data);
    this.dataSource.data = this.data;
    this.tableService.responseTable = this.data;
    
  }

  loadTable(data: any[]) {
    this.displayedColumns = [];
    let llaves = Object.keys(data[0]);

    for (let i = 0; i < llaves.length; i++) {
      this.displayedColumns.push(llaves[i]);
    }
    this.tableService.displayedColumnsTable=this.displayedColumns;
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
