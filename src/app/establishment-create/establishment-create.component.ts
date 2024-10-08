import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EstablishmentService } from '../services/establishment.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-establishment-create',
  templateUrl: './establishment-create.component.html',
  styleUrls: ['./establishment-create.component.css']
})
export class EstablishmentCreateComponent implements OnInit {

  establishmentForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    // adicione outros campos conforme as propriedades do seu EstablishmentDto
  });

  constructor(
    private fb: FormBuilder,
    private establishmentService: EstablishmentService,
    private router: Router
  ) {}
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.establishmentService.createEstablishment(this.establishmentForm.value).subscribe(() => {
      alert('Establishment created successfully!');
      this.router.navigate(['/establishment-list']);
    }, err => {
      // Aqui você pode tratar os erros da requisição, por exemplo, exibindo um alerta com a mensagem de erro.
      alert('An error occurred while creating the establishment. ' + err.message);
    });
      
  
  }

}