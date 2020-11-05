<template>
  <div>
    <div id="write article">Write Editor</div>
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
    <a class="my_button" v-on:click="send">Отправить</a>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Rich-text editor content.</p>",
      editorConfig: {      
      },
    };
  },
  watch: {
    editorData: function() {
      console.log("Observer");
    }
  },
  methods: {
    send() {
      console.log("send() start");
      var text = this.editorData;
      console.log(text);
    }
  }
};
</script>

<style>
  .ck-editor__editable_inline {
    min-height: 100px;
  } 
  .my_button {
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }
  .my_button:hover {
    background-color: #fff;
    color: #42b983;
  }
</style>