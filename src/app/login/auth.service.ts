import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario)
  {
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '12345') 
    { 
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    }
    else
    { 
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioIsAutenticado()
  {
    return this.usuarioAutenticado;
  }
}
