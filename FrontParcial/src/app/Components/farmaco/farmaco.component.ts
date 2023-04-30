import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-farmaco',
  templateUrl: './farmaco.component.html',
  styleUrls: ['./farmaco.component.css']
})
export class FarmacoComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  data: Array<any>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api:ApiService){}

  ngOnInit(): void {
      this.GetFarmacos();
      var response=this.api.getAll("Farmacos")
      console.log(response)
  }

ngAfterViewInit(): void {
   
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }

  public async GetFarmacos() {
    this.data = await this.api.getAll("Farmacos");
    console.log(this.data[0]);

    this.loadTable(this.data);

    this.dataSource.data = this.data;
    
  }

  loadTable(data: any[]) {
    this.displayedColumns = [];
    let llaves = Object.keys(data[0]);

    for (let i = 0; i < llaves.length; i++) {
      this.displayedColumns.push(llaves[i]);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
