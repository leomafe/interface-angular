import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../services/establishment.service';
import { EstablishmentDto } from '../models/establishment.dto';

@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.css']
})
export class EstablishmentListComponent implements OnInit {
  establishments: EstablishmentDto[];

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit(): void {
    this.getEstablishments();
  }

  getEstablishments(): void {
    this.establishmentService.getEstablishments().subscribe(establishments => this.establishments = establishments);
  }
}