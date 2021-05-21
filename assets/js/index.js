'use strict'

window.addEventListener('DOMContentLoaded', function() {

    class Card {
        constructor(number, parentSelector) {
            this._number = number;
            this._parent = parentSelector;
        }

        buttonEvent (event) {
            const {target:{name, parentNode}} = event
            console.log(this.parentNode.parentNode.classList);
            const bColor = ['red', 'blue', 'green', 'yellow', 'cyan', 'magenta', 'black', 'gray'];
            const label = this.parentNode.parentNode.querySelector('.label');
            const count = this.parentNode.parentNode.querySelector('.count');
            let index = bColor.indexOf(label.style.backgroundColor);
            if (name === 'minusBtn') {
                count.innerHTML > 0 ? count.innerHTML-- : count.innerHTML = 0;
                label.style.backgroundColor = index > 0 && count.innerHTML > 0 ? bColor[--index] : count.innerHTML != 0 ? bColor[bColor.length-1+index] : bColor[0];
            }
            if (name === 'plusBtn') {
                count.innerHTML++;
                label.style.backgroundColor = index < bColor.length-1 ? bColor[++index] : bColor[0];
            }
        };

        elementEvent (event) {
            const neighbors = this.parentNode.querySelectorAll('.cardListItem');
            for (const key of neighbors) {
                if (!key.classList.contains('selectItem')) {
                    continue;
                }
                key.classList.remove('selectItem')
            }
            if (this.classList.contains('selectItem')) {
                return
            }
            this.classList.add('selectItem');
            
        };

        render() {
            const element = document.createElement('div');
            element.classList.add('cardListItem');
            element.innerHTML = `
                <div>
                    <div>Card ${this._number}</div>
                    <div>Count: <span class="count">0</span>
                </div>
                <div class="label" style="background-color: red"></div>
                <div class="btnGroup">
                    <button  name="minusBtn">minus</button>
                    <button name="plusBtn">plus</button>
                </div>
            `;
            this._parent.append(element);
            const buttonItems = element.querySelectorAll('button');
            element.addEventListener(`click`, this.elementEvent);
            buttonItems.forEach((buttonItem) => buttonItem.addEventListener(`click`, this.buttonEvent));
        }
    };

    domElementGenerator('div', 'main','listsContainer', 'Counters');
    listResolve(12, Card,'.listsContainer', 'cardList', 'Card');
});