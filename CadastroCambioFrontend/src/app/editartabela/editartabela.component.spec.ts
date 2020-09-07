import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartabelaComponent } from './editartabela.component';

describe('EditartabelaComponent', () => {
  let component: EditartabelaComponent;
  let fixture: ComponentFixture<EditartabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditartabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditartabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
