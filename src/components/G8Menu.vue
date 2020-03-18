<!--
  - GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
  -
  - Author: eidng8
  -->

<template>
  <el-menu default-active="2"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose">
    <g8-menu-item v-for="(item, idx) of list"
                  :key="idx"
                  :item="item"
                  index-key="indexKey"></g8-menu-item>
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

  @Prop({default: 'key'}) public indexKey!: string;

  public expended = false;

  public handleOpen() {
    console.log('open');
  }

  public handleClose() {
    console.log('close');
  }
}
</script>
