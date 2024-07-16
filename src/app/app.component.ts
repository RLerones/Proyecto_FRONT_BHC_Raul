import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpService } from './http-service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MatTableModule, HttpClientModule, FormsModule, MatFormFieldModule, MatInputModule],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['name', 'quantity', 'price', 'delete'];
  dataSource: any[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.fetchStockItems();
  }

  fetchStockItems() {
    this.httpService.getStockItems().subscribe(data => {
      this.dataSource = data;
    });
  }

  onSubmit(form: any) {
    this.httpService.createStockItem(form.value).subscribe(() => {
      this.fetchStockItems();
      form.reset();
    });
  }

  applyFilter(query: string) {
    this.httpService.getFilteredStockItems(query).subscribe(data => {
      this.dataSource = data;
    });
  }

  deleteItem(id: number) {
    this.httpService.deleteStockItem(id).subscribe(() => {
      this.fetchStockItems();
    });
  }
}
