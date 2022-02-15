import { environment } from "src/environments/environment";
const base_url= environment.base_url;
export class Usuario{



    constructor(
      public nombre:string,
      public email:string,
      public img:string,
      public role:string,
      public uid:string,
   ){}

 get getImgUrl(){

    //http://localhost:3005/api/upload/usuarios/6bb53f6d-22fc-4ef8-8149-1f29d60bd1bfa.jpg

    if(!this.img){
        return `${base_url}/upload/usuarios/no-image`;
    }else if(this.img){

        return `${base_url}/upload/usuarios/${this.img}`;

    }else{

        return `${base_url}/upload/usuarios/no-image`;
    }


   }


}