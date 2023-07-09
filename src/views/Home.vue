<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" v-if="showPosts"/>
    <button @click="showPosts = !showPosts">toggle post</button>
    <button @click="posts.pop()"> delete a post</button>
  </div>
</template>

<script>
import {ref, computed} from 'vue'
import PostList from '../components/PostList.vue'


export default {
  name: 'Home',
  components:{PostList},
  setup(){
   const posts = ref([
                      {
                        title:"Welcome to the blof Welcome to the blof Welcome to the blof Welcome to the blof Welcome to the blof",
                        body:"loreIpsum",
                        id:1
                      },
                      {
                        title:"Top 5 tips for vue js",
                          body:"this is another tips for vue.js lore ipsim op 5 tips for vue jsop 5 tips for vue jsop 5 tips for vue jsop 5 tips for vue jsop 5 tips for vue js",
                          id:2
                      }
                    ])
   const showPosts = ref(true)
   return {posts,showPosts}
  },
  
}
</script>
