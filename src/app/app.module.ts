import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { UserService } from './services/user.service';
import { TopScoreService } from './services/AAAtop-score.service';
import { PlayerService } from './services/AAAplayer.service';
import { GameStatsService } from './services/game-stats.service';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { GameButtonComponent } from './components/game-button/game-button.component';
import { StartCountdownComponent } from './components/start-countdown/start-countdown.component';
import { TopScoreComponent } from './components/top-score/top-score.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { ResultsComponent } from './components/results/results.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    GameButtonComponent,
    StartCountdownComponent,
    TopScoreComponent,
    BlocksComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    UserService,
    TopScoreService,
    PlayerService,
    GameStatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
