import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitStash } from './git-stash';

describe('GitStash', () => {
  let component: GitStash;
  let fixture: ComponentFixture<GitStash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitStash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitStash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
