<script setup>
import useForm from '@/hooks/useForm'
const {isLoginShow}=useForm()
</script>
<template>
	<m-login :show="isLoginShow" />
	<MList :list="[]" />
</template>



<style lang="scss" scoped>
</style>
