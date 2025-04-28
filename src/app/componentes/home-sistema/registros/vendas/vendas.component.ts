import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JuntarService } from 'src/app/componentes/juntar.service';
import { Cliente } from 'src/app/interfaces/clientes';
import { Medicamento } from 'src/app/interfaces/medicamentos';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  medicamentos : Medicamento[] = [];
  clientes : Cliente[] = [];

  venda = {
    numVenda : '' ,
    cliente : '' ,
    formaPaga : '' ,
    dataVenda : '' ,
    medicamentoVendido : '' ,
    qtdProd : '' ,
    vlrTotal : ''
  }

  constructor(
        private service: JuntarService,
        private router: Router,
        private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.carregarClientes();
    this.carregarMedicamentos();
  }

  carregarClientes(): void{
     fetch('http://localhost:8080/CadClientes')
        .then(response => response.json())
        .then(data => {
          this.clientes = data;
        })
        .catch(error => {
          console.error('Erro ao carregar clientes : ', error);
        });
  }

  carregarMedicamentos(): void{
      fetch('http://localhost:8080/CadProdutos')
      .then(response => response.json())
      .then(data => {
        this.medicamentos = data ;
      })
      .catch(erro => {
        console.error("erro ao registrar a venda " , erro);
      })
  }

  async registrarVenda(){

    const { numVenda , cliente , formaPaga , dataVenda , medicamentoVendido , qtdProd , vlrTotal } = this.venda;

    if( !numVenda || !cliente || !formaPaga || !dataVenda || !medicamentoVendido || !qtdProd || !vlrTotal ){
      alert("Preencha todos os campos !!");
      return;
    }

    try{

      const response = await this.service.RegsVendas(this.venda);

      alert("Venda cadastrada com sucesso !");

      this.venda = { numVenda : '' , cliente : '' , formaPaga : '' , dataVenda : '' , medicamentoVendido : '' , qtdProd : '' , vlrTotal : '' };
      this.router.navigate(['homeSistema']);

    }
    catch(error : any){
      alert("Erro ao registrar a venda !! " +error.message);
    }
  }
}
