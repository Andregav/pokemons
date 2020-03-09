import { async, ComponentFixture, TestBed   } from '@angular/core/testing';

import { PokemonDetailComponent } from './pokemon-detail.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RouterModule  } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { Data } from '../data_type';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: APP_BASE_HREF, useValue : '/' }],
      imports: [ HttpClientTestingModule, RouterModule.forRoot([]) ],
      declarations: [ PokemonDetailComponent ],
       
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

