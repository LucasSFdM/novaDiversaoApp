import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ben10Page } from './ben10.page';

describe('Ben10Page', () => {
  let component: Ben10Page;
  let fixture: ComponentFixture<Ben10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ben10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ben10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
