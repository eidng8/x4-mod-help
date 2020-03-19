<!--
  - GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
  -
  - Author: eidng8
  -->

<template>
  <el-submenu :index="item.key" v-if="hasChild">
    <template slot="title">
      <span>{{ item.name }}</span>
    </template>
    <g8-menu-item v-for="(child, idx) of item.children"
                  :key="idx"
                  :item="child"></g8-menu-item>
  </el-submenu>

  <el-menu-item v-else :index="item.key">
    <template slot="title">
      <span>{{ item.name }}</span>
    </template>
  </el-menu-item>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import IMenuItem from '@/types/MenuItem';

@Component({
  name: 'g8-menu-item',
})
export default class G8MenuItem extends Vue {
  @Prop() public item!: IMenuItem;

  public expended = false;

  public get hasChild() {
    return this.item.children && this.item.children.length;
  }
}
</script>
