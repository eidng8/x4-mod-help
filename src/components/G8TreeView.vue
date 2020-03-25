<!--
  - GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
  -
  - Author: eidng8
  -->

<template>
  <li>
    <div :class="{bold: isFolder}" @click="toggle" @dblclick="makeFolder">
      <span>{{ item.name }}</span>
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <g8-tree-view class="item"
                    v-for="(child, index) in item.children"
                    :key="index"
                    :item="child"
                    @make-folder="$emit('make-folder', $event)"
                    @add-item="$emit('add-item', $event)"></g8-tree-view>
      <li class="add" @click="$emit('add-item', item)">+</li>
    </ul>
  </li>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import IMenuItem from '@/types/MenuItem';

@Component({
  name: 'g8-tree-view',
})
export default class G8TreeView extends Vue {
  @Prop() public item!: IMenuItem;

  public isOpen = false;

  public get isFolder() {
    return this.item.children && this.item.children.length;
  }

  public toggle() {
    if (this.isFolder) {
      this.isOpen = !this.isOpen;
    }
  }

  public makeFolder() {
    if (!this.isFolder) {
      this.$emit('make-folder', this.item);
      this.isOpen = true;
    }
  }
}
</script>

<style scoped>

</style>
