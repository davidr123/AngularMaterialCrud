import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.models';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  providers: [MediaMatcher]
})
export class PagesComponent  {

  public ImgUrl='';
  public usuario:Usuario;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private usuarioService: UsuariosService, private route: Router) {

      this.ImgUrl= usuarioService.usuario.getImgUrl;
      this.usuario= usuarioService.usuario;


    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  Logout(){
    this.usuarioService.logout();
    this.route.navigateByUrl('/login');
  }


 

}
