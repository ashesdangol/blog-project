<template>
  <div class="single-post" >
   <h3>{{post.title}}</h3>
    <p>{{snippet}}</p>
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
