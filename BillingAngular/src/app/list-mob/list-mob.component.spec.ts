import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMobComponent } from './list-mob.component';

describe('ListMobComponent', () => {
  let component: ListMobComponent;
  let fixture: ComponentFixture<ListMobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
