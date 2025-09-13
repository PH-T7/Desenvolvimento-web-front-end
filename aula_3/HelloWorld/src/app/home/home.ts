import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  imports: [FormsModule , CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
 lista: string[] = [];
 adicionarItem(event: any){
    this.lista.push(event?.target.value);
    event.target.value = '';
    }
}
