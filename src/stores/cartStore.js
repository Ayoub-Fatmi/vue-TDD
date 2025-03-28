import { defineStore } from "pinia";


export const useCartStore = defineStore("cartStore", {
    state: () => ({
        items: [],
        totalItems: 0,
        subtotal: 0,
    }),
    actions: {
        addToCart(productToadd) {
            if (this.items.some(item => item.product.id === productToadd.id)) {
                this.items.find(item => item.product.id === productToadd.id).quantity += 1;
            }else{
                this.items.push({ product: productToadd, quantity: 1} );
            }
            this.totalItems += 1;
            this.calculateSubtotal();
            this.calculateTax();
            this.calculategrandTotal();
        },

        updateQuantity(productId, newQuantity) {
            const itemToUpdate = this.items.find(item => item.product.id === productId);
            if (itemToUpdate) {
                this.totalItems += newQuantity - itemToUpdate.quantity;
                itemToUpdate.quantity = newQuantity;
            }
            this.calculateSubtotal(); ;
        },

        removeFromCart(productId) {
            const itemToRemove = this.items.find(item => item.product.id === productId);
            if (itemToRemove) {
                this.totalItems -= itemToRemove.quantity;
                this.items.splice(this.items.indexOf(itemToRemove), 1);
            }
            this.calculateSubtotal(); ;
        },

        clearCart() {
            this.items = [];
            this.totalItems = 0;
            this.subtotal = 0;
        },

        calculateSubtotal() {
            this.subtotal = this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
        },

        calculateTax() {
            this.tax = Math.round(this.subtotal * 0.08);
        },

        calculategrandTotal() {
            this.grandTotal = this.subtotal + this.tax;
        },
    },
});
