import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JuntarService {

  private readonly API = "http://localhost:5000/estoque"

  constructor(private http: HttpClient) { }

  
}
