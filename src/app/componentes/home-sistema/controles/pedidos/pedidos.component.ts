import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JuntarService } from 'src/app/componentes/juntar.service';
import { Fornecedor } from 'src/app/interfaces/fornecedores';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  fornecedores : Fornecedor[] = [];

  pedido = {
    dataPedido : '' ,
    produto : '' ,
    status : '' ,
    vlrUnitario : '' ,
    fornecedor : '' ,
    qtdPedido : '' ,
    dataEntrega : '' ,
    vlrTotal : ''
  }

  constructor(
     private service: JuntarService,
        private router: Router,
        private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.carregarFornecedores();
  }

  carregarFornecedores(): void{

    fetch('http://localhost:8080/CadFornecedores')
      .then(response => response.json())
      .then(data => {
        this.fornecedores = data;
      })
      .catch(error => {
        console.log('Erro ao carregar os fornecedores : ' ,error);
      });
  }

  async controlarPedido(){

    const { dataPedido , produto , status , vlrUnitario , fornecedor , qtdPedido , dataEntrega , vlrTotal } = this.pedido;

    if( !dataPedido || !produto || !status || !vlrUnitario || !fornecedor || !qtdPedido || !dataEntrega || !vlrTotal ){
      alert("Todos os campos devem ser preenchidos ");
      return;
    }

    try{

      const response = await this.service.ContPedidos(this.pedido);

      alert("Pedido cadastrado com sucesso ");

      this.pedido = { dataPedido : '' , produto : '' , status : '' , vlrUnitario : '' , fornecedor : '' , qtdPedido : '' , dataEntrega : '' , vlrTotal : '' };
      this.router.navigate(['homeSistema']);

    }
    catch(error :any){
      alert("Erro ao cadastrar o pedido" + error.message);
    }
  }
}
