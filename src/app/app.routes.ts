import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {path : '' , redirectTo : 'home' , pathMatch : 'full'},
    {path : 'home' , component : HomeComponent , data: { animation: 'HomePage' }},
    { path : 'about' , component : AboutComponent , data: { animation: 'AboutPage' }},
    {path : 'contact' , component : ContactComponent},
    {path : 'skills' , component : SkillsComponent},
    {path : 'certificate' , component : CertificateComponent},
    {path : 'projects' , component : ProjectsComponent},
];
