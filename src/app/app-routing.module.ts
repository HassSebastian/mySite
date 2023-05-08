import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentSiteComponent } from './content-site/content-site.component';
import { AppComponent } from './app.component';
import { FooterMessageAreaComponent } from './footer/footer-message-area/footer-message-area.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'email', component: FooterMessageAreaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
