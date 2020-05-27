import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrsinhosCarinhososPage } from './ursinhos-carinhosos.page';

describe('UrsinhosCarinhososPage', () => {
  let component: UrsinhosCarinhososPage;
  let fixture: ComponentFixture<UrsinhosCarinhososPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrsinhosCarinhososPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrsinhosCarinhososPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
