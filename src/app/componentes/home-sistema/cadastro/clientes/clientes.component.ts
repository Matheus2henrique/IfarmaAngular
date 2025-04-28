import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JuntarService } from 'src/app/componentes/juntar.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente = {
    nome : '' ,
    cpf : '',
    email : '',
    telefone : ''
  };

  constructor(
    private service: JuntarService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  async cadastrar(){
    const { nome , cpf  , email , telefone } = this.cliente;

    if(!nome || !cpf || !email || !telefone){
      alert("Preenchar todos os campos !! ");
      return;
    }


    try{
      const response = await this.service.CadClientes(this.cliente);

      alert("Usuario foi cadastrado com suceeso !!" + response.nome);

      this.cliente = { nome : '' , cpf : '' , email : '' , telefone : '' };
      this.router.navigate(['homeSistema']);
    }
    catch(error : any){
      alert("erro ao cadastrar" + error.message);
    }
  }

  // voltar(){
  //   this.router.navigate(['homeSistema']);
  // }
}
