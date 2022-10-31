import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { TelaLoginComponent } from './telas/tela-login/tela-login.component';
import { TelaSistemaCadastroMedicoComponent } from './telas/tela-sistema-cadastro-medico/tela-sistema-cadastro-medico.component';
import { TelaSistemaCadastroPacienteComponent } from './telas/tela-sistema-cadastro-paciente/tela-sistema-cadastro-paciente.component';
import { TelaSistemaPesquisarMedicoComponent } from './telas/tela-sistema-pesquisar-medico/tela-sistema-pesquisar-medico.component';
import { TelaSistemaPesquisarPacienteComponent } from './telas/tela-sistema-pesquisar-paciente/tela-sistema-pesquisar-paciente.component';
import { TelaSistemaRealizarConsultaComponent } from './telas/tela-sistema-realizar-consulta/tela-sistema-realizar-consulta.component';
import { TelaSistemaComponent } from './telas/tela-sistema/tela-sistema.component';
import { TelaSistemaUsuariosMedicosComponent } from './telas/tela-sistema-usuarios-medicos/tela-sistema-usuarios-medicos.component';
import { TelaSistemaUsuariosPacientesComponent } from './telas/tela-sistema-usuarios-pacientes/tela-sistema-usuarios-pacientes.component';


const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'home', component: TelaSistemaComponent},
  { path: 'cadastrar-medico', component: TelaSistemaCadastroMedicoComponent, },
  { path: 'pesquisar-medico', component: TelaSistemaPesquisarMedicoComponent, },
  { path: 'cadastrar-paciente', component: TelaSistemaCadastroPacienteComponent, },
  { path: 'pesquisar-paciente', component: TelaSistemaPesquisarPacienteComponent, },
  { path: 'realizar-consulta', component: TelaSistemaRealizarConsultaComponent,  },
  { path: 'usuarios-medicos', component: TelaSistemaUsuariosMedicosComponent, },
  {path: 'usuarios-pacientes', component: TelaSistemaUsuariosPacientesComponent, },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, private route: ActivatedRoute) { }
}
