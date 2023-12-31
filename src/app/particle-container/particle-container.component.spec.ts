import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleContainerComponent } from './particle-container.component';

describe('ParticleContainerComponent', () => {
  let component: ParticleContainerComponent;
  let fixture: ComponentFixture<ParticleContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticleContainerComponent]
    });
    fixture = TestBed.createComponent(ParticleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
