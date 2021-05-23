import html from './menu.html';
import template from 'lodash.template';
import { BaseUiComponent } from '../base-ui-component';
import { appHistory } from '../app-history';

const data = {
    title: "Hello, world",
    items: [{
        href: "home",
        name: "go home"
    }, 
    {
        href:"about",
        name: "about"    
    }]
}

export class Menu extends BaseUiComponent{
       
    constructor(){
        super(html, data)

        const links =  this._element.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener("click", this.onClick.bind(this))
        });

    }
    onClick(event){
        event.preventDefault();
        const {href} = event.target
        appHistory.push({pathname:href})
    }
}