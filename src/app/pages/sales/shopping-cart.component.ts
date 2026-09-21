import { Component, computed, Signal, signal  } from "@angular/core";

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

@Component({
    templateUrl : './shopping-cart.component.html',
    selector : 'shopping-cart'

}) 
export class ShoppingCartComponent {
    products = signal<Product[]>([
        {id :1, name : 'Blusa', price: 600, quantity :2},
        {id :11, name : 'Pantalon', price: 800, quantity :2},
        {id :112, name : 'Vestido', price: 1200, quantity :2}
    ]);
    
    setQuantity(product: Product, quantity : number) {
        this.products.update((currentProducts) =>
            currentProducts.map((p) => {
            if (p.id === product.id) {
                // Retornamos un NUEVO objeto con la propiedad quantity actualizada
                return {
                ...p,
                quantity: Math.max(0, p.quantity + quantity),
                };
            }
            return p; // Los demás objetos mantienen su referencia
            })
        );
    }

    addProductUnity(product : Product) {
        this.setQuantity(product, 1);
    }

    decreaseProductUnity(product : Product) {
        if (product.quantity > 1) this.setQuantity(product, -1);
    }



    discountPercent = signal<number>(10); // 10%

    setDiscount(discount : number) {
        this.discountPercent.set(discount);
    }

    subtotal : Signal<number> = computed(() => {
        let sum : number = 0;
        this.products().forEach((product) => {
            sum += product.price * product.quantity;
        })
        return sum;
    })

    discountAmount = computed(() => {
        // calulamos  lo que se descontará
        const sub : number = this.subtotal() * (this.discountPercent() / 100);
        return  sub;
    })

    taxAmount = computed( () => {
        // calculamos los impuestos de lo descontado
        const tax :  number = (this.subtotal() - this.discountAmount()) * .16;
        return tax;
    })

    total = computed( () => {
        return this.subtotal() - this.discountAmount() + this.taxAmount();
    })
}