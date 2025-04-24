import { Component, OnInit } from '@angular/core';
import { JuntarService } from 'src/app/componentes/juntar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

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
