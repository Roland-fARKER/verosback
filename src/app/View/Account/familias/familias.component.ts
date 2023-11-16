import { Component, OnInit } from '@angular/core';
import { Familia } from 'src/app/Models/familia.model';
import { FamiliaService } from 'src/app/Services/famila.service';

@Component({
  selector: 'app-familias',
  templateUrl: './familias.component.html',
  styleUrls: ['./familias.component.css'],
})
export class FamiliasComponent implements OnInit {
  familias: Familia[] = [];

  constructor(private familiaService: FamiliaService) {}

  ngOnInit(): void {
    this.loadFamilias();
  }

  loadFamilias() {
    this.familiaService.getAllFamilias().subscribe((data) => {
      this.familias = data;
    });
  }

  removeFamilia(id: number) {
    this.familiaService.removeFamilia(id).subscribe(() => {
      this.loadFamilias();
    });
  }
}
