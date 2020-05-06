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



const routes: Routes = [

{path:'', redirectTo: '/home', pathMatch:'full'},
{path:'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'forgot', component: ForgotComponent},
{path: 'home', component: HomeComponent},
// {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]}, modify is isAuthenticated method
{path: 'instruction', component: InstructionComponent},
{path: 'result', component: ResultComponent, canActivate: [AuthGuardService]},
{path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
{path: 'question', component: QuestionComponent, canActivate: [AuthGuardService]},
{path: 'communication', component: CommunicationComponent, canActivate: [AuthGuardService] },
{path: 'writing', component: WritingComponent, canActivate: [AuthGuardService]},
{path: 'aptitude', component: AptitudeComponent, canActivate: [AuthGuardService]},
{path: 'technical', component: TechnicalComponent, canActivate: [AuthGuardService]},
{path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{
  
}