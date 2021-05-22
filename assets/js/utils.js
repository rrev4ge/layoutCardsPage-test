'use strict'

function domElementGenerator (selector, parentSelector, className='', innerHTML='') {
        const element = document.createElement(selector);
        console.log(className);
        if (className) {element.classList.add(className)};
        if (innerHTML) {element.innerHTML = `<div>${innerHTML}</div>`};
        const parent = document.querySelector(parentSelector);
        parent.append(element);
        return element;
    };

function listResolve (cardQuantity, item, parentSelector, className='', innerHTML='') {
    if (innerHTML) {
        const parent = document.querySelector(parentSelector);
        const child = domElementGenerator('div', parentSelector, 'listLable', innerHTML);
        parent.append(child);
    };
    const list = domElementGenerator('div', parentSelector, className);
    for (let i = 1; i <= cardQuantity; i++) {
        new item(i, list).render();    
    }
};