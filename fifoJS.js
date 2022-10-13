let add = '\n add: Agrega un elemento a la lista y Devuelve true, siempre y cuando la longitud de la lista sea menor al limite, de lo contrario Devuelve false \n';
let element = '\nelement: Devuelve el primer elemento de la lista \n';
let offer1 = '\noffer1: Agrega el elemento indicado al final de la lista y Devuelve true \n'
let offer2 = '\noffer2: Si la la longitud de la lista excede o es igual al limite, eliminará el ultimo elemento y agregará el elemento indicado al final de la lista \n';
let peek = '\npeek: Devuelve el primer elemento de la lista o null en caso de que este vacía \n';
let poll = '\npoll: Devuelve y elimina el primer elemento de la lista o null en caso de que este vacía \n';
let remove = '\nremove: Devuelve y elimina el primer elemento de la lista \n';
let size = '\nsize: Devuelve la longitud de la lista \n';
let is_empty = '\nis_empty: Devuelve true si la lista está vacía o false si contiene elementos \n'

class Queue {    
    constructor() {        
        this.items = [];
        this.limit = 10;
    }

    add(e){        
        if (this.items.length < this.limit){
            this.items.push(e)
            return true
        }    
        return false
    }

    element(){
        return this.items[0]
    }

    offer1(e){
        this.items.push(e);
        return true
    }

    offer2(e){
        if (this.items.length >= this.limit){
            this.items.pop()
            this.items.push(e)
            return true
        }    
        return false
    }

    peek(){
        if (this.items.length === 0){
            return null
        }    
        return this.items[0]
    }

    poll(){
        if (this.items.length === 0) null
        let aux = this.items.shift()        
        return aux
    }

    remove(){
        let aux = this.items.shift()
        return aux
    }

    size(){
        return this.items.length
    }

    is_empty(){
        return this.items.length === 0
    }    
}

const getItems = () => {
    let items = '\nElementos de la lista: '
    console.log(items, queue.items, '\n')    
}

const queue = new Queue()

console.log(peek, queue.peek())
getItems()

console.log(is_empty, queue.is_empty())
getItems()

console.log(add, queue.add(9))
getItems()

let counter = 10
while (counter < 19){
    queue.add(counter)
    counter ++
}  

getItems()

console.log(add, queue.add(19))
getItems()

console.log(element, queue.element()); 
getItems()

console.log(add, queue.add(21))
getItems()

console.log(offer1, queue.offer1(22))
getItems()

console.log(offer2, queue.offer2(23))
getItems()

console.log(peek, queue.peek())
getItems()

console.log(poll, queue.poll())
getItems()

console.log(remove, queue.remove())
getItems()

console.log(size, queue.size())

console.log(is_empty, queue.is_empty())
