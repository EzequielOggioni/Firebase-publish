import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAgbm-R7Rz8lFEtYQEGHtK9XmNwMkG3gyo",
      authDomain: "beltran-1ae8a.firebaseapp.com",
      projectId: "beltran-1ae8a",
      storageBucket: "beltran-1ae8a.appspot.com",
      messagingSenderId: "926158595015",
      appId: "1:926158595015:web:0a6adf8ffb761c9d8d6fe2"
    })),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
