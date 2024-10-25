import { Component } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { UsuarioListar } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnacao = "Cadastrar";
  descTitulo = "Cadastrar Usuarios";
  
  constructor(private usuarioService: UsuarioService, private router: Router){}

  criarUsuario(usuario : UsuarioListar){
    this.usuarioService.CriarUsuario(usuario).subscribe(response => {
      this.router.navigate(['/'])
    });
  }

}