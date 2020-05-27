import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RickMortyPage } from './rick-morty.page';

describe('RickMortyPage', () => {
  let component: RickMortyPage;
  let fixture: ComponentFixture<RickMortyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickMortyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RickMortyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
