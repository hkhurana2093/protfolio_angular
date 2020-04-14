import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { SkillComponent } from './main/skill/skill.component';
import { ContactComponent } from './main/contact/contact.component';
import { AboutComponent } from './main/about/about.component';
import { HomeComponent } from './main/home/home.component';
import { NgbModule, NgbAccordionModule, NgbCarouselModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule, ModalModule, CarouselModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChatroomComponent } from './main/chatroom/chatroom.component';




const appRoutes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'skill', component: SkillComponent, data: { title: 'Skill' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  { path: 'portfolio', component: PortfolioComponent, data: { title: 'Portfolio' } },
  { path: 'chatroom', component: ChatroomComponent, data: { title: 'ChatRoom' } }

];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    SkillComponent,
    PortfolioComponent,
    HomeComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgbModule,
    NgbAccordionModule.forRoot(),
    NgbCarouselModule.forRoot(),
    NgbTabsetModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
