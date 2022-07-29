import { IFormCanDeactivate } from './iform-candeactivate';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate>
{
  canDeactivate(component: IFormCanDeactivate, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      console.log('guarda de desativção');
    return component.podeDesativar();
  }
}