import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JuntarService } from 'src/app/componentes/juntar.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionario = {
      nome : '' ,
      cpf : '' ,
      status : '' ,
      senha : ''
  }

  constructor(
     private service: JuntarService,
        private router: Router,
        private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  async cadastrar(){

    const { nome , cpf , status , senha } = this.funcionario;

    if(!nome || !cpf || !status || !senha){
      alert('Preencha todos os campos !!');
      return;
    }

    try{

      const response = await this.service.CadFuncionarios(this.funcionario);

      alert('Usuario : foi cadastrado com sucesso !!'+ response.nome );

      this.funcionario = { nome : '' , cpf : '' , status : '' , senha : '' };
      this.router.navigate(['../../homeSistema']);

    }
    catch(error : any){
      alert('erro ao cadastrar ' + error.message);
    }

  }
}
