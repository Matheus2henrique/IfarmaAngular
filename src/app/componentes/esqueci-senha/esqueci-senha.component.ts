import { Component, OnInit } from '@angular/core';
import { JuntarService } from '../juntar.service';
import { Juntar } from './../juntar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {

  constructor(
    private juntar : JuntarService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  cancelar(){
    alert('O envio de e-mail foi cancelado');
    this.router.navigate(['/loginIfarma']);
  }

  enviar(){
    alert('Enviamos um e-mail para a sua caixa de entrada');
    this.router.navigate(['/loginIfarma']);
  }

}
