import {ipcRenderer} from "electron";
<!--
  - GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
  -
  - Author: eidng8
  -->

<template>
  <div id="app">

    <el-container style="border:solid 1px; height: 50vh;">
      <el-aside width="200px" style="height: 100%">
      </el-aside>
      <el-container id="diff">
        csdfds
      </el-container>
    </el-container>

    <el-container style="border:solid 1px; height: calc(50vh - 40px);">
      <el-aside width="200px">
      </el-aside>
      <el-container ref="fileContent">
        <ul class="g8-tree-view" :class="themeClass">
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
import {ipcRenderer} from 'electron';
import {Component, Vue} from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import G8TreeView from 'g8-vue-tree/src/components/G8TreeView.vue';
import {GameState} from '@/store';
import {GetTheme, ThemeChanged} from '@/native';

@Component({
  components: {G8TreeView},
})
export default class App extends Vue {
  treeData = {
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

  theme = 'light';

  get themeClass() {
    return `g8-tree__${this.theme}`;
  }

  constructor() {
    super();
    // this.loadSourceTree();
    console.log(getModule(GameState).unpackedPath);

    this.theme = ipcRenderer.sendSync(GetTheme);

    ipcRenderer.on(ThemeChanged, (evt, theme) => (this.theme = theme));
  }

  // onSelect(item: string) {
  //   const doc = new DOMParser().parseFromString(item, 'text/xml');
  //   if (!doc) {
  //     console.log('parse error');
  //     return;
  //   }
  //
  //   const errors = doc.getElementsByTagName('parsererror');
  //   if (errors && errors.length) {
  //     // this.$refs.fileContent.$el.innerHTML = errors[0];
  //     console.log(doc);
  //   }
  // }

  // private loadSourceTree() {
  //   this.sources = [];
  //   const path = getModule(GameState).unpackedPath;
  //   if (!path) return;
  //
  //   const tee = dir(path, {extensions: /\.xml/i, normalizePath: true});
  //   const tree = this.pathList2Menu(tee);
  //   if (tree.children) {
  //     this.sources = tree.children;
  //   }
  // }
  //
  // private pathList2Menu(list: IPathList): IMenuItem {
  //   const item: IMenuItem = {name: list.name, key: list.path};
  //   if (!list.path) {
  //     console.log(list);
  //   }
  //   if (list.children) {
  //     item.children = [];
  //     for (const child of list.children) {
  //       item.children.push(this.pathList2Menu(child));
  //     }
  //   }
  //   return item;
  // }
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
