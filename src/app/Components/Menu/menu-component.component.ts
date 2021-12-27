import { Component } from "@angular/core";

@Component({
    selector: 'menu-component',
    templateUrl: './menu-component.component.html'
})

export class MenuComponent {
    constructor(){
        console.log("Componente menu-component cargado exitosamente!");
    }
}