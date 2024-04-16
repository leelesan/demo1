<template>
  <div class="hello">
    <el-button type="primary" @click="downloadExcel">下载Excel</el-button>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
             rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
             rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
      </li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import {downLoad} from "@/api";
import axios from "axios";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    downloadExcel1(){
      axios({
        url: 'http://localhost:9001/mes/download2',
        method: 'GET',
        responseType: 'blob' // 设置响应类型为arraybuffer
      }).then(response => {
        const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }); // 创建Blob对象
        const url = window.URL.createObjectURL(blob); // 创建下载链接
        window.open(url); // 在新窗口中打开链接
      }).catch(error => {
        console.error('Error downloading file:', error);
      });
    },
    downloadExcel() {
      downLoad().then(response => {
        // 创建 URL 对象
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // 创建 <a> 元素
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'example.xlsx'); // 设置文件名

        // 将 <a> 元素添加到文档中，并触发点击事件进行下载
        document.body.appendChild(link);
        link.click();

        // 下载完成后，释放 URL 对象
        window.URL.revokeObjectURL(url);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
