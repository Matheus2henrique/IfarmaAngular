import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juntar } from '../juntar';
import { JuntarService } from '../juntar.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private service: JuntarService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  esqueciSenha(){
    alert("Um email com instruções de recuperação de senha foi enviado para seu e-mail cadastrado.");
    this.router.navigate(['/esqueciSenha']);
  }

  entrar(){
    alert("Login efetuado com sucesso!");
    this.router.navigate(['/homeSistema']);
  }

}
