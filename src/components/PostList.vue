<template>
  <div class="post-list" >
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"/>
    </div>
    
  </div>
</template>

<script>
import {ref, computed, onMounted, onUnmounted, onUpdated} from 'vue'
import SinglePost from '../components/SinglePost.vue'

export default {
  name: 'PostList',
  props:['posts'],
  components:{SinglePost},
  setup(props){
    // console.log(props.posts)
    onMounted(()=>{
        console.log("component mounted")
    })
    onUnmounted(()=>{
         console.log("component Unmounted")
    }),
    onUpdated(()=>{
        console.log("component on update")
    })
   
  }
}
</script>
