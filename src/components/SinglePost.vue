<template>
  <div class="single-post" >
   <h3>{{post.title}}</h3>
    <p>{{snippet}}</p>
    <span v-for="tag in post.tags" :key="tag">#{{tag}}</span>
  </div>
</template>

<script>
import {ref, computed} from 'vue'

export default {
  props:['post'],
  setup(props){
    const snippet = computed(()=>{
        return props.post.body.substring(0, 40) + '....'
    })
    return {snippet}

  }
}
</script>
