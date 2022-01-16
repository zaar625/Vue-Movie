<template>
  <div class="casts">
    <div v-for="cast in castList" v-bind:key="cast">
      <div class="casts__item">
        <div
          class="casts__item__img"
          :style="{ backgroundImage: `url(${w500Image(cast.profile_path)})` }"
        ></div>
        <p className="casts__item__name">{{ cast.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getCastList } from '../../api/api-function';
import { apiConfig } from '../../api/apiConfig';
export default {
  data() {
    return {
      castList: [],
    };
  },
  methods: {
    w500Image(image) {
      return apiConfig.w500Image(image);
    },
  },
  async mounted() {
    const id = this.$route.params.id;
    const category = this.$route.name;
    const { data } = await getCastList(id, category);
    this.castList = data.cast.slice(0, 5);

    console.log(data);
  },
};
</script>

<style></style>
