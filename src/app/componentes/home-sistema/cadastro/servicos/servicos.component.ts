import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JuntarService } from 'src/app/componentes/juntar.service';
import { Profissional } from 'src/app/interfaces/profissional';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})

export class ServicosComponent implements OnInit {

  profissionais : Profissional[] = [];

  servico = {
    nome: '',
    descricao: '',
    tempo: '',
    pagamento: '',
    categoria: '',
    profissionais: ''
  };


  constructor(
    private service: JuntarService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.carregarProfissionais();
  }

  carregarProfissionais(): void {
    fetch('http://localhost:8080/CadFuncionarios')
      .then(response => response.json())
      .then(data => {
        this.profissionais = data;
      })
      .catch(error => {
        console.error('Erro ao carregar profissionais:', error);
      });
  }

  async cadastrar() {
    const { nome, descricao, tempo, pagamento, categoria, profissionais } = this.servico;

    if (!nome || !descricao || !tempo || !pagamento || !categoria || !profissionais) {
      alert("Todos os campos devem ser preenchidos!");
      return;
    }

    try {

      const response = await this.service.CadServicos(this.servico);

      alert("Serviço: " + response.nome + " foi cadastrado com sucesso!");

      this.servico = { nome: '', descricao: '', tempo: '', pagamento: '', categoria: '', profissionais: '' };
      this.router.navigate(['homeSistema']);

    } catch (error: any) {
      alert("Erro ao cadastrar: " + error.message);
    }
  }
}
