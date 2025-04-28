import { Component, OnInit } from '@angular/core';
import { JuntarService } from 'src/app/componentes/juntar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  receita = {
    codReceita : '' ,
    nomePaciente : '' ,
    nomeMedico : '' ,
    dataEmissao : '' ,
    dataValidade : '' ,
    crm : '' ,
    prescricao : ''
  }

  constructor(
     private service: JuntarService,
        private router: Router,
        private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  async cadastrar(){

    const { codReceita , nomePaciente , nomeMedico , dataEmissao , dataValidade , crm , prescricao } = this.receita;

    if( !codReceita || !nomePaciente || !nomeMedico || !dataEmissao || !dataValidade || !crm || !prescricao ){
      alert("Todos os campos devem ser preenchidos !!" );
      return;
    }

    try{

      const response = await this.service.ContReceitas(this.receita);

      alert("Receita cadastrada com sucesso !!");

      this.receita = { codReceita : '' , nomePaciente : '' , nomeMedico : '' , dataEmissao : '' , dataValidade : '' , crm : '' , prescricao : '' };
      this.router.navigate(['homeSistema']);

    }
    catch(error : any){
      alert("Erro ao cadastrar a receita !" + error.message);
    }
  }

}
