import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtmComponent} from './atm/atm.component';
import { NavComponent} from './nav/nav.component';
import { TellerComponent } from './teller/teller.component';
import { ContactComponent } from './contact/contact.component';


export const router: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'atm', component: AtmComponent },
  { path: 'nav', component: NavComponent },
  { path: 'teller', component: TellerComponent },
  { path: 'contact', component: ContactComponent }
  
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
