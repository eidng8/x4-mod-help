<!--
  - GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
  -
  - Author: eidng8
  -->

<template>
  <div id="app">

    <el-container style="border:solid 1px; height: 50vh;">
      <el-aside width="200px" style="height: 100%">
        <g8-mods-tree :list="list" style="height: 100%"></g8-mods-tree>
      </el-aside>
      <el-container id="diff">
        csdfds
      </el-container>
    </el-container>

    <el-container style="border:solid 1px; height: calc(50vh - 40px);">
      <el-aside width="200px">
        <g8-source-tree :tree="this.sources"></g8-source-tree>
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
import G8SourceTree from '@/components/G8SourceTree.vue';
import IPathList from '@/types/PathList';
import G8ModsTree from '@/components/G8ModsTree.vue';

@Component({
  components: {G8ModsTree, G8SourceTree},
})
export default class App extends Vue {
  public list: IPathList[] = [
    {
      path: '/a', name: 'item 1',
    },
  ];

  public sources: IPathList = {
    path: '/a',
    name: 'a',
    children: [{path: '/b', name: 'b'}],
  };
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
