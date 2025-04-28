import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuntarService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  CadClientes(cliente: any) {
    return firstValueFrom(this.http.post<any>(`${this.baseUrl}/CadClientes`, cliente));
  }

  CadFornecedores(fornecedor : any) {
    return firstValueFrom(this.http.post<any>(`${this.baseUrl}/CadFornecedores`,fornecedor));
  }

  CadFuncionarios(funcionario : any){
    return firstValueFrom(this.http.post<any>(`${this.baseUrl}/CadFuncionarios` , funcionario));
  }

  CadProdutos(produto : any){
    return firstValueFrom(this.http.post<any>(`${this.baseUrl}/CadProdutos` , produto));
  }

  CadServicos(servico : any){
    return firstValueFrom (this.http.post<any>(`${this.baseUrl}/CadServicos` , servico));
  }

  ContReceitas(receita : any){
    return firstValueFrom (this.http.post<any>(`${this.baseUrl}/ContReceitas` , receita));
  }

  ContPedidos(pedido : any){
    return firstValueFrom (this.http.post<any>(`${this.baseUrl}/ContPedidos` , pedido));
  }

  RegsVendas(venda : any){
    return firstValueFrom (this.http.post<any>(`${this.baseUrl}/RegsVendas` , venda));
  }

}
