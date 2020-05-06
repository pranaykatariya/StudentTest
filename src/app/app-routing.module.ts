import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { QuestionComponent } from './question/question.component';
import { InstructionComponent } from './instruction/instruction.component';
import { ResultComponent } from './result/result.component';
import { CommunicationComponent } from './communication/communication.component';
import { WritingComponent } from './writing/writing.component';
import { TechnicalComponent } from './technical/technical.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CarouselComponent } from './carousel/carousel.component'
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [

{path:'', redirectTo: '/home', pathMatch:'full'},
{path:'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'forgot', component: ForgotComponent},
{path: 'home', component: HomeComponent},
// {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]}, modify is isAuthenticated method
{path: 'instruction', component: InstructionComponent},
{path: 'result', component: ResultComponent},
{path: 'admin', component: AdminComponent},
{path: 'question', component: QuestionComponent},
{path: 'communication', component: CommunicationComponent},
{path: 'writing', component: WritingComponent},
{path: 'aptitude', component: AptitudeComponent},
{path: 'technical', component: TechnicalComponent},
{path: 'admin-login', component: AdminLoginComponent},
{path: 'carousel', component: CarouselComponent},
{path: 'profile', component:ProfileComponent},
{path: '**', component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{
  
}