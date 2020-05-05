import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';


describe('AppComponent', () => {
  it('should create the app', async () => {
    await render(AppComponent, {
      imports: [
        BrowserModule,
        AppRoutingModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/'}]
    });

    expect(screen.getByText('Sample Angular Application')).toBeTruthy();
  });
});
