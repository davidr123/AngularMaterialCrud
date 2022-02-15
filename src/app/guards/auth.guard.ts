import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private usuarioService:UsuariosService, private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)   {
    

 return  this.usuarioService.ValidarToken()
.pipe(
  tap(esAutenticado=>{
    if(!esAutenticado){
this.route.navigateByUrl('/login')
    }
  })
)

  

  }
  
}
