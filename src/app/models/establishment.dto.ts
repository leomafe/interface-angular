import { GeolocationDto } from '../models/geolocaltion.dto';
export interface EstablishmentDto {
    id: number;
    name: string;
    geolocation: GeolocationDto;
    // insira outras propriedades que seu estabelecimento possa ter
  }