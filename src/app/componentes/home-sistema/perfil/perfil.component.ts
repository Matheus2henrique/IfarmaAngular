import { Component, OnInit } from '@angular/core';
import { JuntarService } from '../../juntar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private service: JuntarService,
            private router: Router,
            private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigate(['homeSistema']);
  }
}
