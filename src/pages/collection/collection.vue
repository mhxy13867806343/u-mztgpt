<script setup>
import useForm from '@/hooks/useForm'
const {isLoginShow}=useForm()
</script>

<template>
    <m-login :show="isLoginShow" />
	<MSearch></MSearch>
	<van-back-top/>
	<MList :list="[]" />
</template>


<style lang="scss" scoped>

</style>
