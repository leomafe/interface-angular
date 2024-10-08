import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstablishmentDto } from '../models/establishment.dto';
import { GeolocationDto } from '../models/geolocation.dto';

@Injectable({
providedIn: 'root'
})
export class EstablishmentService {

    private API_URL = 'http://localhost:8080/establishment'; 

    constructor(private http: HttpClient) { }

    createEstablishment(dto: EstablishmentDto): Observable<any> {
        return this.http.post(this.API_URL, dto);
    }

    updateEstablishment(id: string, dto: EstablishmentDto): Observable<any> {
        return this.http.put(`${this.API_URL}/${id}`, dto);
    }

    deleteEstablishment(id: string): Observable<any> {
        return this.http.delete(`${this.API_URL}/${id}`);
    }

    findEstablishment(dto: GeolocationDto): Observable<EstablishmentDto[]> {
        return this.http.get<EstablishmentDto[]>(`${this.API_URL}/geolocation`, {
            params: {
                latitude: dto.latitude,
                longitude: dto.longitude
            }
        });
    }
}