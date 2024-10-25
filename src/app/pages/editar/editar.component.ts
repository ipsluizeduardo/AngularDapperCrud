import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { UsuarioListar } from '../../models/Usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormularioComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

  btnacao = "Editar";
  descTitulo = "Editar Usuarios";
  usuario!: UsuarioListar;

  constructor(private usuarioService: UsuarioService, private router : Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.usuarioService.GetUsuarioId(id).subscribe(response => {
      this.usuario = response.dados;
    });
  }

  editarUsuario(usuario : UsuarioListar){
      this.usuarioService.EditarUsuario(usuario).subscribe(response => {
        this.router.navigate(['/']);
      })
  }
}
