"use strict";

class Validator {
    constructor({selector, pattern = {}, method}) {
        this.form = document.querySelectorAll(selector);
        this.pattern = pattern;
        this.method = method;
        this.elementsForms = [];
        this.error = new Set();
    }

    init() {
        this.applyStyle();
        this.setPattern();
       
        this.form.forEach(elem => {
            elem.addEventListener('submit', e => {
                const target = event.target;
                if(this.elementsForms.length === 3) {
                    this.elementsForms.length = 0;
                }
                if(this.elementsForms.length < 3) {
                    this.elementsForms = [...target].filter(item => {
                        return item.tagName.toLowerCase() !=='button' && item.type !== 'button' && 
                         item.className !== 'mess';
                    });
                }
                this.elementsForms.forEach(elem => elem.addEventListener('change', this.chekIt.bind(this))); 
            });
        }); 
    }

    isValid(elem) {
        const validatorMethod = {
            notEmpty(elem) {
                if(elem.value.trim === '') {
                    return false;
                }
                return true;
            },
            pattern(elem, pattern) {
                return pattern.test(elem.value);
            }
        };
        if(this.method) {
            const method = this.method[elem.type];

            if(method) {
                return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]) );
            }
        } else {
            console.warn('Необходимо передать тип полей ввода и методы проверки этих полей');
        }       

        return true;
    }

    chekIt(event) {
        console.log('event: ', event);
        const target = event.target;
        if(this.isValid(target)) {
            this.showSucces(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
    }

    showError(elem) {
        elem.classList.remove('success1');
        elem.classList.add('error');
        elem.style.border = '3px solid red';
        elem.style.color = 'red';
        if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка...';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
    }

    showSucces(elem) {
        elem.classList.remove('error');
        elem.classList.add('success1');
        elem.style.border = '3px solid green';
        elem.style.color = 'green';
        //проверяем есть ли у СОСЕДА нужный класс
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
            elem.nextElementSibling.remove();
        }
    }

    applyStyle() {
        const style = document.createElement('style');

        style.textContent = `
        input.success1 {
            border: 2px solid green
        }
        input.error {
            border: 2px solid red
        }
        .validator-error {
            margin-top: -30px;
            color: red;
            font-family: sans-serif
        }
        `;
        document.head.appendChild(style);
    }

    setPattern() {
        if(!this.pattern.tel) {
            this.pattern.tel = /^\+?(\d){11}$/;
        }

        if(!this.pattern.email) {
            this.pattern.email = /^\w+@\w+\.\w{2,}$/;
        }

        if(!this.pattern.text) {
            this.pattern.text = /^.+$/;
        }
        
    }

}

const valid = new Validator({
    selector: 'form',
    pattern: {
        tel: /^\+?(\d){11}$/,
        text: /[А-Яа-я]/
    },
    //проверяем, что поле не пустое и потом проверяем паттерн tel (email)
    method: {
        'tel': [
            ['notEmpty'],
            ['pattern', 'tel']
        ],
        'email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'text': [
            ['notEmpty'],
            ['pattern', 'text']
        ]
    }
});
valid.init();