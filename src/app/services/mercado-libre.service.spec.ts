import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Product } from '../interfaces/productI';

import { MercadoLibreService } from './mercado-libre.service';

describe('Service: Mercado Libre', () => {
  let httpClientSpy: {get:jasmine.Spy}
  let service: MercadoLibreService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new MercadoLibreService(httpClientSpy as any);
  });

});
