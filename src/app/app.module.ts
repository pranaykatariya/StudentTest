import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { DemoComponent } from './demo/demo.component';
import { QuestionComponent } from './question/question.component';
import { AptitudeQuestionService } from './services/aptitude-question.service';
import { InstructionComponent } from './instruction/instruction.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ResultComponent } from './result/result.component';
import { CommunicationComponent } from './communication/communication.component';
import { TimerComponent } from './timer/timer.component';
import { WritingComponent } from './writing/writing.component';
import { FormStyle } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    ForgotComponent,
    DemoComponent,
    QuestionComponent,
    InstructionComponent,
    NavigationComponent,
    ResultComponent,
    CommunicationComponent,
    TimerComponent,
    WritingComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AptitudeQuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
