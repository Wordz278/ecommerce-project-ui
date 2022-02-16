import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSuperComponent } from './board-super.component';

describe('BoardModeratorComponent', () => {
  let component: BoardSuperComponent;
  let fixture: ComponentFixture<BoardSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardSuperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
