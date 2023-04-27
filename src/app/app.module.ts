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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
