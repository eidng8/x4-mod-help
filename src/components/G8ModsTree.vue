<!--
  - GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
  -
  - Author: eidng8
  -->

<template>
  <g8-menu :list="list" index-key="path"></g8-menu>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import IPathList from '@/types/PathList';
import G8Menu from './G8Menu.vue';

@Component({
  name: 'g8-mods-tree',
  components: {
    G8Menu,
  },
})
export default class G8ModsTree extends Vue {
  @Prop() public list!: IPathList[];
}
</script>

<style scoped>

</style>
