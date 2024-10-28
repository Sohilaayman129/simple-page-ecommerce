import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundpagesComponent } from './notfoundpages.component';

describe('NotfoundpagesComponent', () => {
  let component: NotfoundpagesComponent;
  let fixture: ComponentFixture<NotfoundpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotfoundpagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotfoundpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
