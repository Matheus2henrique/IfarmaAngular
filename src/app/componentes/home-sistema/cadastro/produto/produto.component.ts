import { Component, OnInit } from '@angular/core';
import { JuntarService } from 'src/app/componentes/juntar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto = {
      nome : '' ,
      validade : '' ,
      dataFabricacao : '' ,
      quantidade : '' ,
      receita : '' ,
      descricao : '' ,
      codigo  : '' ,
      valor : '' ,
      lote : '' ,
      categoria : ''
  }

  constructor(
     private service: JuntarService,
        private router: Router,
        private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  async cadastrar(){

    const { nome , validade , dataFabricacao , quantidade , receita , descricao , codigo , valor , lote , categoria } = this.produto;

    if( !nome || !validade || !dataFabricacao || !quantidade || !receita || !descricao || !codigo || !valor || !lote || !categoria ){
        alert("Todos os campos devem ser preenchidos !!" );
        return;
    }

    try{
        const response = await this.service.CadProdutos(this.produto);

        alert("Usuario : " + response.nome + " foi cadastrado com sucesso !");

        this.produto = { nome : '' , validade : '' , dataFabricacao : '' , quantidade : '' , receita : '' , descricao : '' , codigo : '' , valor : '' , lote : '' , categoria : '' }
        this.router.navigate(['homeSistema']);

    }
    catch(error : any ){
      alert("erro ao cadastrar " + error.message );
    }

  }
}
