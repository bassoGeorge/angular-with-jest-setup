import { AppComponent } from './app.component';
import { render } from '@testing-library/angular';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';


describe('AppComponent', () => {
  it('should create the app', async () => {
    const component = await render(AppComponent, {
      imports: [
        BrowserModule,
        AppRoutingModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/'}]
    });

    expect(component.getByText('Sample Angular Application')).toBeTruthy();
  });
});
