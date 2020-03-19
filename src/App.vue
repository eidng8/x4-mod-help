<!--
  - GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
  -
  - Author: eidng8
  -->

<template>
  <div id="app">

    <el-container style="border:solid 1px; height: 50vh;">
      <el-aside width="200px" style="height: 100%">
        <g8-menu :list="list"></g8-menu>
        <!--        <g8-mods-tree :list="list" style="height: 100%"></g8-mods-tree>-->
      </el-aside>
      <el-container id="diff">
        csdfds
      </el-container>
    </el-container>

    <el-container style="border:solid 1px; height: calc(50vh - 40px);">
      <el-aside width="200px">
        <g8-menu :list="sources"></g8-menu>
        <!--        <g8-source-tree :tree="this.sources"></g8-source-tree>-->
      </el-aside>
      <el-container>
        csdfds
      </el-container>
    </el-container>

    <el-container>
      <el-col>status</el-col>
    </el-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import dir from 'directory-tree';
import G8SourceTree from '@/components/G8SourceTree.vue';
import IPathList from '@/types/PathList';
import G8Menu from '@/components/G8Menu.vue';
import G8ModsTree from '@/components/G8ModsTree.vue';
import IMenuItem from '@/types/MenuItem';

@Component({
  components: {G8Menu, G8ModsTree, G8SourceTree},
})
export default class App extends Vue {
  public list: IMenuItem[] = [
    {key: '/a', name: 'item 1', children: [{key: '1', name: 'a'}]},
  ];

  public sources!: IMenuItem[];

  constructor() {
    super();
    this.loadSourceTree();
  }

  private loadSourceTree() {
    const path: string = this.$store.state.paths.unpacked;
    if (!path) {
      this.sources = [];
      return;
    }

    const tee = dir(path, {extensions: /\.xml/i, normalizePath: true});
    const tree = this.pathList2Menu(tee);
    if (tree.children) {
      this.sources = tree.children;
    }
  }

  private pathList2Menu(list: IPathList): IMenuItem {
    const item: IMenuItem = {name: list.name, key: list.path};
    if (!list.path) {
      console.log(list);
    }
    if (list.children) {
      item.children = [];
      for (const child of list.children) {
        item.children.push(this.pathList2Menu(child));
      }
    }
    return item;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/

  .el-col {
    padding-bottom: 2px;
    padding-top: 2px;
  }
}
</style>
