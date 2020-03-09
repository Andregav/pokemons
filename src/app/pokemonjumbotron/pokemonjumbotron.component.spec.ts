import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonjumbotronComponent } from './pokemonjumbotron.component';

describe('PokemonjumbotronComponent', () => {
  let component: PokemonjumbotronComponent;
  let fixture: ComponentFixture<PokemonjumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonjumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonjumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
