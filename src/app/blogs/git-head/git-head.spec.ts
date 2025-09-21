import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHead } from './git-head';

describe('GitHead', () => {
  let component: GitHead;
  let fixture: ComponentFixture<GitHead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitHead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitHead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
