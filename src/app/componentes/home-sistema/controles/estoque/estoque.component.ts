import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juntar } from 'src/app/componentes/juntar';
import { JuntarService } from 'src/app/componentes/juntar.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
lp: any;

  constructor(
     private service: JuntarService,
        private router: Router,
        private route : ActivatedRoute
   ) { }

  estoque : Juntar = {
    id : 0 ,
    produto : ' '
  }

  ngOnInit(): void {
  }

  test(): string {
    if(this.estoque.produto.length >= 256) {
      this.router.navigate(['/home'])
    }
    return ''
  }

  abrirPesq(){

    if( (this.estoque.produto.length >= 2) ){

      const pesquisa = document.getElementById('js')
      if (pesquisa){
        if (pesquisa.classList.contains('abrir')) {
          pesquisa.classList.remove('abrir')
        } else{
          pesquisa.classList.add('abrir')
        }
      }
    }
    else{
      alert('O nome do produto não pode ser vazio ou com menos de 2 caracteres')
    }
  }
      // const lupa = document.getElementById('lupa')
}
