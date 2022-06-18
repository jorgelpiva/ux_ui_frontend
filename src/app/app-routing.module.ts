
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { MenuComponent } from './views/menu/menu.component'
import { UserCrudComponent } from './views/user-crud/user-crud.component'
import { LoginComponent } from './views/login/login.component'
import { EditarPerfilComponent } from './views/editar-perfil/editar-perfil.component';
import { ProcedimentoComponent } from './views/procedimento/procedimento.component'
import { DadosHospitalaresComponent } from './views/dados-hospitalares/dados-hospitalares.component'
import { IntercorrenciasComponent } from './views/intercorrencias/intercorrencias.component'
import { PreCirurgicosComponent } from './views/pre-cirurgicos/pre-cirurgicos.component'
import { PosCirurgicosComponent } from './views/pos-cirurgicos/pos-cirurgicos.component'
import { FeedbackComponent } from './views/feedback/feedback.component'
import { AssistenteVirtualComponent } from './views/assistente-virtual/assistente-virtual.component'
import { BemEstarComponent } from './views/bem-estar/bem-estar.component'
import { EsqueciSenhaComponent } from './views/esqueci-senha/esqueci-senha.component'


const routes: Routes = [ 
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "cadastro",
    component: UserCrudComponent
  },
  {
    path: "esqueci-senha",
    component: EsqueciSenhaComponent
  },
  {
    path: "editar-perfil",
    component: EditarPerfilComponent
  },
  {
    path: "procedimento",
    component: ProcedimentoComponent
  },
  {
    path: "dados-hospitalares",
    component: DadosHospitalaresComponent
  },
  {
    path: "intercorrencias",
    component: IntercorrenciasComponent
  },
  {
    path: "pre-cirurgicos",
    component: PreCirurgicosComponent
  },
  {
    path: "pos-cirurgicos",
    component: PosCirurgicosComponent
  },
  {
    path: "feedback",
    component: FeedbackComponent
  },
  {
    path: "assistente-virtual",
    component: AssistenteVirtualComponent
  },
  {
    path: "bem-estar",
    component: BemEstarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
