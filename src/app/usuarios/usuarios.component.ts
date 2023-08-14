import { Component, getNgModuleById, inject } from '@angular/core';
import { collection, collectionData, doc, Firestore, setDoc } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  public valor:string="";
  public item: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  public mensaje:any[]=[];

  constructor() {
    const itemCollection = collection(this.firestore, 'items');
    this.item = collectionData(itemCollection);
    const itemCollection2 = collection(this.firestore, 'Mensaje');
    collectionData(itemCollection2).subscribe(t=> this.mensaje = t);
    
  }

  agregar(){
    
    var id = Math.random() * 10000000 * (new Date()).getMilliseconds();

    setDoc(doc(this.firestore,'items',id.toString() ),{ name: this.valor});
  }
}
