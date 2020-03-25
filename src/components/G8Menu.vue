<!--
  - GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
  -
  - Author: eidng8
  -->

<template>
  <el-menu @select="$emit('select', $event)">
    <g8-menu-item v-for="(item, idx) of list" :key="idx" :item="item">
    </g8-menu-item>
  </el-menu>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import IMenuItem from '@/types/MenuItem';
import G8MenuItem from './G8MenuItem.vue';

@Component({
  name: 'g8-menu',
  components: {
    G8MenuItem,
  },
})
export default class G8Menu extends Vue {
  @Prop() public list!: IMenuItem[];

  public expended = false;
}
</script>

<style scoped>
.el-menu {
  height: 100%;
}
</style>
