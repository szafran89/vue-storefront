export default {
  name: 'AddToCart',
  props: {
    product: {
      type: Object,
      required: true
    },
    qty: {
      type: Number,
      required: true
    }
  },
  methods: {
    addToCart (product) {
      this.product.qty = this.qty === '' ? 1 : this.qty
      this.$store.dispatch('cart/addItem', { productToAdd: product })
    }
  }
}
