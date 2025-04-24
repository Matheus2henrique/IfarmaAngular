import { Component, OnInit , Input } from '@angular/core';
import { Juntar } from '../juntar';
import { JuntarService } from '../juntar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private service: JuntarService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  cont(){
    this.router.navigate(['loginIfarma']);
  }

}
