<!--
  - GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
  -
  - Author: eidng8
  -->

<template>
  <div id="app">

    <el-container style="border:solid 1px; height: 50vh;">
      <el-aside width="200px" style="height: 100%">
        <!--g8-menu :list="list"></g8-menu-->
      </el-aside>
      <el-container id="diff">
        csdfds
      </el-container>
    </el-container>

    <el-container style="border:solid 1px; height: calc(50vh - 40px);">
      <el-aside width="200px">
        <g8-menu :list="sources" @select="onSelect"></g8-menu>
      </el-aside>
      <el-container ref="fileContent">
        <ul class="g8-tree-view">
          <g8-tree-view class="g8-tree__highlight_hover"
                        :item="treeData"></g8-tree-view>
        </ul>
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
import G8TreeView from 'g8-vue-tree/src/components/G8TreeView.vue';
import G8SourceTree from '@/components/G8SourceTree.vue';
import IPathList from '@/types/PathList';
import G8Menu from '@/components/G8Menu.vue';
import G8ModsTree from '@/components/G8ModsTree.vue';
import {IMenuItem} from '@/types/MenuItem';

@Component({
  components: {G8TreeView, G8Menu, G8ModsTree, G8SourceTree},
})
export default class App extends Vue {
  public treeData = {
    name: 'My Tree',
    children: [
      {name: 'hello'},
      {
        name: 'wat',
        tags: [
          {key: 'a', label: 'a'},
          {key: 'b', label: 'ab'},
          {key: 'c', label: 'abc'},
          {key: 'a', label: 1234},
          {key: 'a', label: 12345},
          {key: 'a', label: 123456},
          {key: 'a', label: 1234567},
          {key: 'a', label: 12345678},
          {key: 'a', label: 123456789},
          {key: 'a', label: 1234567890},
          {key: 'a', label: 'wwwwwwwwwwwwwww'},
        ],
      },
      {
        name: 'child folder',
        children: [
          {
            name: 'child folder',
            children: [
              {name: 'hello'},
              {
                name: 'wat',
                tags: [{key: 'a', label: 'z'}],
              },
            ],
          },
          {name: 'hello'},
          {name: 'wat'},
          {
            name: 'child folder',
            children: [{name: 'hello'}, {name: 'wat'}],
          },
        ],
      },
    ],
  };

  public list: IMenuItem[] = [
    {key: '/a', name: 'item 1', children: [{key: '1', name: 'a'}]},
  ];

  public sources!: IMenuItem[];

  constructor() {
    super();
    this.loadSourceTree();
  }

  onSelect(item: string) {
    const doc = new DOMParser().parseFromString(item, 'text/xml');
    if (!doc) {
      console.log('parse error');
      return;
    }

    const errors = doc.getElementsByTagName('parsererror');
    if (errors && errors.length) {
      // this.$refs.fileContent.$el.innerHTML = errors[0];
      console.log(doc);
    }
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

  /*.el-col {*/
  /*  padding-bottom: 2px;*/
  /*  padding-top: 2px;*/
  /*}*/
}
</style>
