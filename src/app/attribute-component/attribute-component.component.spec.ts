import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeComponentComponent } from './attribute-component.component';

describe('AttributeComponentComponent', () => {
  let component: AttributeComponentComponent;
  let fixture: ComponentFixture<AttributeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttributeComponentComponent]
    });
    fixture = TestBed.createComponent(AttributeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
