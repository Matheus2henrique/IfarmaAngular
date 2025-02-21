import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { RouterModule } from '@angular/router';
import { EsqueciSenhaComponent } from './componentes/esqueci-senha/esqueci-senha.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { HomeSistemaComponent } from './componentes/home-sistema/home-sistema.component';
import { FuncionarioComponent } from './componentes/home-sistema/cadastro/funcionario/funcionario.component';
import { ProdutoComponent } from './componentes/home-sistema/cadastro/produto/produto.component';
import { ServicosComponent } from './componentes/home-sistema/cadastro/servicos/servicos.component';
import { FornecedoresComponent } from './componentes/home-sistema/cadastro/fornecedores/fornecedores.component';
import { ClientesComponent } from './componentes/home-sistema/cadastro/clientes/clientes.component';
import { EstoqueComponent } from './componentes/home-sistema/controles/estoque/estoque.component';
import { ReceitasComponent } from './componentes/home-sistema/controles/receitas/receitas.component';
import { PedidosComponent } from './componentes/home-sistema/controles/pedidos/pedidos.component';
import { VendasComponent } from './componentes/home-sistema/registros/vendas/vendas.component';
import { RelatoriosComponent } from './componentes/home-sistema/registros/relatorios/relatorios.component';
import { NotaFiscalComponent } from './componentes/home-sistema/historicos/nota-fiscal/nota-fiscal.component';
import { HistVendasComponent } from './componentes/home-sistema/historicos/hist-vendas/hist-vendas.component';
import { HistPedidosComponent } from './componentes/home-sistema/historicos/hist-pedidos/hist-pedidos.component';
import { PerfilComponent } from './componentes/home-sistema/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    HomeComponent,
    EsqueciSenhaComponent,
    CabecalhoComponent,
    HomeSistemaComponent,
    FuncionarioComponent,
    ProdutoComponent,
    ServicosComponent,
    FornecedoresComponent,
    ClientesComponent,
    EstoqueComponent,
    ReceitasComponent,
    PedidosComponent,
    VendasComponent,
    RelatoriosComponent,
    NotaFiscalComponent,
    HistVendasComponent,
    HistPedidosComponent,
    PerfilComponent
  ],
  imports: [
  // import { ProdutoComponent } from './componentes/home-sistema/cadastro/produto/produto.component';
  BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
