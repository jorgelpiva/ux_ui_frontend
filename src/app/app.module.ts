import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSelectModule } from '@angular/material/select'

import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';

import { UserCrudComponent } from './views/user-crud/user-crud.component';
import { LoginComponent } from './views/login/login.component';
import { EditarPerfilComponent } from './views/editar-perfil/editar-perfil.component';
import { ProcedimentoComponent } from './views/procedimento/procedimento.component';
import { DadosHospitalaresComponent } from './views/dados-hospitalares/dados-hospitalares.component';
import { IntercorrenciasComponent } from './views/intercorrencias/intercorrencias.component';
import { PreCirurgicosComponent } from './views/pre-cirurgicos/pre-cirurgicos.component';
import { PosCirurgicosComponent } from './views/pos-cirurgicos/pos-cirurgicos.component';
import { FeedbackComponent } from './views/feedback/feedback.component';
import { AssistenteVirtualComponent } from './views/assistente-virtual/assistente-virtual.component';
import { BemEstarComponent } from './views/bem-estar/bem-estar.component';
import { EsqueciSenhaComponent } from './views/esqueci-senha/esqueci-senha.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    UserCrudComponent,
    LoginComponent,
    EditarPerfilComponent,
    ProcedimentoComponent,
    DadosHospitalaresComponent,
    IntercorrenciasComponent,
    PreCirurgicosComponent,
    PosCirurgicosComponent,
    FeedbackComponent,
    AssistenteVirtualComponent,
    BemEstarComponent,
    EsqueciSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
