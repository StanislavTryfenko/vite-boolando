<script>
export default {
  name: 'ShopCard',
  props: { product: Object },
  data() {
    return {

    };
  },
  methods: {
    discountedPrice(product) {
      const fullPrice = product.price;
      const discountValue = parseInt(product.badges.find(badge => badge.type === 'discount').value);
      return (fullPrice - (fullPrice * Math.abs(discountValue) / 100)).toFixed(2)
    }
  },

};
</script>

<template>
  <div class="case">
    <div class="img-content">
      <img @mouseover="product.hoverEffect = true" @mouseleave="product.hoverEffect = false"
        :src="product.hoverEffect === true ? './img/' + product.frontImage : './img/' + product.backImage"
        :alt="product.name">

      <i class="fa-solid fa-heart"></i>

      <div class="tags">
        <!-- per ogni badge in product.badge usando la key per tipo in modo da mettere la classe del tipo, inseriamo la value dei badge -->
        <div v-for="badge in product.badges" :key="badge.type" :class="badge.type">{{ badge.value }}</div>
      </div>
    </div>

    <h5 class="brand">{{ product.brand }}</h5>
    <h4 class="dress-name">{{ product.name }}</h4>

    <h5>
      <span class="discounted-price"
        v-if="product.badges.find(badge => badge.type === 'discount')">{{ discountedPrice(product) }} &euro; </span>
      <span class="original-price">{{ product.price }} &euro;</span>
    </h5>
  </div>
</template>

<style scoped>
.case {
  max-height: 50%;
  max-width: 30%;
  margin-bottom: 2rem;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.img-content {
  position: relative;
}

.fa-heart {
  position: absolute;
  right: 4%;
  top: 2%;
}
</style>