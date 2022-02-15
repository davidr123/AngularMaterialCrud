import { Component, OnInit,ViewChild } from '@angular/core';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MediaMatcher,BreakpointObserver} from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material/sidenav';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MediaMatcher]
})
export class DashboardComponent  {

/*
  public ImgUrl='';
  public usuario:Usuario;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private usuarioService: UsuariosService, private route: Router) {

      this.ImgUrl= usuarioService.usuario.getImgUrl;
      this.usuario= usuarioService.usuario


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

 */

}
