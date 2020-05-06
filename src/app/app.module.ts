import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";

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
import { CommonURLService } from './services/common-url.service';
import { StudentService } from './services/student.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CommunicationQuestionService } from './services/communication-question.service';
import { TechnicalQuestionService } from './services/technical-question.service';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { TechnicalComponent } from './technical/technical.component';
import { MyChartComponent } from './Components/my-chart/my-chart.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProfileComponent } from './profile/profile.component';




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
    HeaderComponent,
    AptitudeComponent,
    TechnicalComponent,
    MyChartComponent,
    AdminLoginComponent,
    CarouselComponent,
    ProfileComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  
  providers: [
    AptitudeQuestionService,
    CommunicationQuestionService,
    TechnicalQuestionService,
    CommonURLService,
    StudentService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
