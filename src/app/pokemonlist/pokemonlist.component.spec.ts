import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonlistComponent } from './pokemonlist.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule  } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';


describe('PokemonlistComponent', () => {
  let component: PokemonlistComponent;
  let fixture: ComponentFixture<PokemonlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: APP_BASE_HREF, useValue : '/' }],
      imports: [ HttpClientTestingModule, RouterModule.forRoot([]) ],
      declarations: [ PokemonlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});