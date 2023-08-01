import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  fomulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fomulario = this.FormBuilder.group({
      conteudo: ['Formulário Reativo'],
      autoria: [''],
      modelo: ['modelo1']
    });
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
     this.router.navigate(['/listarPensamento'])
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
