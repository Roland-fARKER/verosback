import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulo de Rutas
import { AppRoutingModule } from './app-routing.module';

//Modulos
import { SharedModule } from './View/Shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

//Primeng
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { TokenHttpInterceptor } from './Interceptors/token.interceptor';
import { StatusHttpInterceptor } from './Interceptors/status.interceptor';
import { AuthenticationService } from './Services/authentication.service';


//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './View/Account/login/login.component';
import { DashboardComponent } from './View/dashboard/dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { CrearUsuariosComponent } from './View/Account/crear-usuarios/crear-usuarios.component';
import { FamiliasComponent } from './View/Account/familias/familias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LoaderComponent,
    CrearUsuariosComponent,
    FamiliasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessagesModule,
    ToastModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputSwitchModule,
    TableModule,
    FormsModule,
    DialogModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    AuthenticationService, 
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
