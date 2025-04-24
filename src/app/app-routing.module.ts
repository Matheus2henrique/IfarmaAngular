import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { EsqueciSenhaComponent } from './componentes/esqueci-senha/esqueci-senha.component';
import { HomeSistemaComponent } from './componentes/home-sistema/home-sistema.component';
import { ClientesComponent } from './componentes/home-sistema/cadastro/clientes/clientes.component';
import { PerfilComponent } from './componentes/home-sistema/perfil/perfil.component';
import { ProdutoComponent } from './componentes/home-sistema/cadastro/produto/produto.component';
import { FornecedoresComponent } from './componentes/home-sistema/cadastro/fornecedores/fornecedores.component';
import { ServicosComponent } from './componentes/home-sistema/cadastro/servicos/servicos.component';
import { EstoqueComponent } from './componentes/home-sistema/controles/estoque/estoque.component';
import { ReceitasComponent } from './componentes/home-sistema/controles/receitas/receitas.component';
import { PedidosComponent } from './componentes/home-sistema/controles/pedidos/pedidos.component';
import { VendasComponent } from './componentes/home-sistema/registros/vendas/vendas.component';
import { RelatoriosComponent } from './componentes/home-sistema/registros/relatorios/relatorios.component';
import { NotaFiscalComponent } from './componentes/home-sistema/historicos/nota-fiscal/nota-fiscal.component';
import { HistVendasComponent } from './componentes/home-sistema/historicos/hist-vendas/hist-vendas.component';
import { HistPedidosComponent } from './componentes/home-sistema/historicos/hist-pedidos/hist-pedidos.component';
import { FuncionarioComponent } from './componentes/home-sistema/cadastro/funcionario/funcionario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log',
    pathMatch: 'full'
  },
  {
    path: 'loginIfarma',
    component : LoginComponent
  },
  {
    path: "log",
    component: IndexComponent
  },
  {
    path: 'esqueciSenha',
    component: EsqueciSenhaComponent
  },
  {
    path: 'homeSistema',
    component: HomeSistemaComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'CadFuncionarios',
    component: FuncionarioComponent
  },
  {
    path: 'CadProdutos',
    component: ProdutoComponent
  },
  {
    path: 'CadServicos',
    component: ServicosComponent
  },
  {
    path: 'CadFornecedores',
    component: FornecedoresComponent
  },
  {
    path: 'CadClientes',
    component: ClientesComponent
  },
  {
    path: 'ContEstoque',
    component: EstoqueComponent
  },
  {
    path: 'ContReceitas',
    component: ReceitasComponent
  },
  {
    path: 'ContPedidos',
    component: PedidosComponent
  },
  {
    path: 'RegsVendas',
    component: VendasComponent
  },
  {
    path: 'RegsRelatorios',
    component: RelatoriosComponent
  },
  {
    path: 'HistNotaFiscal',
    component: NotaFiscalComponent
  },
  {
    path: 'HistHistoricoVendas',
    component: HistVendasComponent
  },
  {
    path: 'HistHistoricoPedidos',
    component: HistPedidosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
