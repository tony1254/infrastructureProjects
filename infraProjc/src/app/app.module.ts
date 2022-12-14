import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";


import { PersonaService } from './Persona/persona.service';
import { PersonaModule } from './Persona/persona.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//ESTAS LIBRERIAS STANDALONE fontawesome
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { HttpInterceptorService } from './auth/http-interceptor.service';
import { AuthModule } from './auth/auth.module';

import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonaModule,
    HttpClientModule,
    UsuarioModule,
    AuthModule,
    DataTablesModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
//ESTAS CONSTRUCTOR STANDALONE fontawesome

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(far);
    library.addIconPacks(fab);
  }
}

