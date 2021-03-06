import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasBuscadosComponent } from './mas-buscados.component';

describe('MasBuscadosComponent', () => {
  let component: MasBuscadosComponent;
  let fixture: ComponentFixture<MasBuscadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ MasBuscadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasBuscadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
