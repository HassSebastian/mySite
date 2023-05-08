import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ContentSiteComponent } from './content-site/content-site.component';
import { HeadlineComponent } from './content-site/headline/headline.component';
import { AboutMeComponent } from './content-site/about-me/about-me.component';
import { MySkillsComponent } from './content-site/my-skills/my-skills.component';
import { PortfolioComponent } from './content-site/portfolio/portfolio.component';
import { PotfolioHeadlineComponent } from './content-site/portfolio/potfolio-headline/potfolio-headline.component';
import { PotfolioJoinComponent } from './content-site/portfolio/potfolio-join/potfolio-join.component';
import { PotfolioElPolloComponent } from './content-site/portfolio/potfolio-el-pollo/potfolio-el-pollo.component';
import { PotfolioPokedexComponent } from './content-site/portfolio/potfolio-pokedex/potfolio-pokedex.component';
import { FooterComponent } from './footer/footer.component';
import { FooterHeadlineComponent } from './footer/footer-headline/footer-headline.component';
import { FooterLegalNoticeComponent } from './footer/footer-legal-notice/footer-legal-notice.component';
import { FooterMessageAreaComponent } from './footer/footer-message-area/footer-message-area.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioRofComponent } from './content-site/portfolio/portfolio-rof/portfolio-rof.component';
import { FormsModule } from '@angular/forms';
import { ResponsiveMenuComponent } from './header/responsive-menu/responsive-menu.component';
import { ServiceService } from './service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentSiteComponent,
    HeadlineComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    PotfolioHeadlineComponent,
    PotfolioJoinComponent,
    PotfolioElPolloComponent,
    PotfolioPokedexComponent,
    FooterComponent,
    FooterHeadlineComponent,
    FooterLegalNoticeComponent,
    FooterMessageAreaComponent,
    PortfolioRofComponent,
    ResponsiveMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
