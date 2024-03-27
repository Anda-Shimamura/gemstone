<script setup lang="ts">
    import PageHeader from './components/PageHeader.vue';
    import { useRouter } from 'vue-router';
    import { onMounted } from 'vue';

    const router = useRouter()
    onMounted(()=>{
      router.push('/')
    })
</script>

<template>
    <div class="appWrapper">
      <PageHeader></PageHeader>
      <router-view/>
    </div>
</template>

<style scoped>
  .appWrapper{
    width: 1080px;
    height: 680.6px;
    margin: 0 auto;
    background-color: antiquewhite;
    text-align: center;
    border: rgb(248, 172, 80) 2px  solid;

  }
  
</style>
