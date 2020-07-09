"use strict";

let text1 = document.querySelector('.text1');

class DomElement {
    selector;
    height = '200px';
    width = '500px';
    bg = 'orange';
    fontSize = '25px';
    elem(selector) {
        do {
            this.selector = prompt('Введите строку, начинающуюся на "." или "#"');
            if (this.selector && this.selector[0] === '#') {
                this.selector = this.selector.slice(1);
                return this.best();
            } else if (this.selector && this.selector[0] === '.') {
                this.selector = this.selector.slice(1);
                return this.block();
            } else if (this.selector && this.selector.length > 0) {
                this.selector = null;
            }
        }
        while (!this.selector);
    }
    block(selector) {
        document.body.insertAdjacentHTML("afterbegin", `<div class="` + this.selector + 
        `"><strong>Всем привет!</strong> Вставлен блок</div>`);
        let div = document.querySelector('.' + this.selector + '');
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
    }
    best(selector) {
        document.body.insertAdjacentHTML("afterbegin", `<div id="` + this.selector + 
        `"><strong>Всем привет!</strong> Вставлен идентификатор</div>`);
        let div = document.getElementById('' + this.selector + '');
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
    }
}

let domElement = new DomElement();

domElement.elem();
