import { Component, OnInit } from '@angular/core';
import { JuntarService } from '../juntar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-sistema',
  templateUrl: './home-sistema.component.html',
  styleUrls: ['./home-sistema.component.css']
})
export class HomeSistemaComponent implements OnInit {

  constructor(
    private service: JuntarService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  perfil(){
    alert('Voce esta sendo direcionado para a area de Perfil');
    this.router.navigate(['/perfil'])
  }

  func(){
    alert('Voce esta sendo direcionado para a area de Funcionario');
    this.router.navigate(['/CadFuncionarios']);
  }
  prod(){
    alert('Voce esta sendo direcionado para a area de Produto');
    this.router.navigate(['/CadProdutos'])
  }
  serv(){
    alert('Voce esta sendo direcionado para a area de Servicos');
    this.router.navigate(['/CadServicos'])
  }
  fornc(){
    alert('Voce esta sendo direcionado para a area de Fornecedores');
    this.router.navigate(['/CadFornecedores'])
  }
  clien(){
    alert('Voce esta sendo direcionado para a area de Clientes');
    this.router.navigate(['/CadClientes'])
  }
  esto(){
    alert('Voce esta sendo direcionado para a area de Estoque');
    this.router.navigate(['/ContEstoque'])
  }
  recei(){
    alert('Voce esta sendo direcionado para a area de Receitas');
    this.router.navigate(['/ContReceitas'])
  }
  ped(){
    alert('Voce esta sendo direcionado para a area de Pedidos');
    this.router.navigate(['/ContPedidos'])
  }
  vend(){
    alert('Voce esta sendo direcionado para a area de Vendas');
    this.router.navigate(['/RegsVendas'])
  }
  relat(){
    alert('Voce esta sendo direcionado para a area de Relatorio');
    this.router.navigate(['/RegsRelatorios'])
  }
  notFisc(){
    alert('Voce esta sendo direcionado para a area de Nota Fiscal');
    this.router.navigate(['/HistNotaFiscal'])
  }
  histVend(){
    alert('Voce esta sendo direcionado para a area de Historico de Vendas');
    this.router.navigate(['/HistHistoricoVendas'])
  }
  histPed(){
    alert('Voce esta sendo direcionado para a area de Historico de Pedidos');
    this.router.navigate(['/HistHistoricoPedidos'])
  }



}
