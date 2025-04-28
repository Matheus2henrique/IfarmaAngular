import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JuntarService } from 'src/app/componentes/juntar.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  fornecedor = {
    nome : '' ,
    endereco : '' ,
    email : '' ,
    pagamento : '' ,
    cnpj : '' ,
    telefone : '' ,
    produto : '' ,
    codigo : ''
  }

  constructor(
     private service: JuntarService,
        private router: Router,
        private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  async cadastrar () {

    const { nome , endereco , email , pagamento , cnpj , telefone , produto , codigo } = this.fornecedor;

    if(!nome || !endereco || !email || !pagamento || !cnpj || !telefone || !produto || !codigo){
        alert("Preencha todos os campos !! ");
        return;
    }

    try{
      const response = await this.service.CadFornecedores(this.fornecedor);

      alert("Usuario : " +response.nome + " cadastrado com sucessdo");

      this.fornecedor = { nome : '' , endereco : '' , email : '' , pagamento : '' , cnpj : '' , telefone : '' , produto : '' , codigo : ''};
      this.router.navigate(['/homeSistema']);

    }
    catch(error : any){
      alert("Erro ao cadastrar fornecedor !!" + error.message);
    }

  }

  // voltar(){
  //   this.router.navigate(['homeSistema/controles/estoque']);
  // }
}
