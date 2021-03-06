import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityRowComponent } from './utility-row.component';
import { SearchComponent } from '../search/search.component';

describe('UtilityRowComponent', () => {
  let component: UtilityRowComponent;
  let fixture: ComponentFixture<UtilityRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        UtilityRowComponent, 
        SearchComponent 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
