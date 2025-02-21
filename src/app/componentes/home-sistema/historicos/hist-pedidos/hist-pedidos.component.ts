import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JuntarService } from 'src/app/componentes/juntar.service';

@Component({
  selector: 'app-hist-pedidos',
  templateUrl: './hist-pedidos.component.html',
  styleUrls: ['./hist-pedidos.component.css']
})
export class HistPedidosComponent implements OnInit {

  constructor(
     private service: JuntarService,
        private router: Router,
        private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
