<script>
export default {
	name: "Tag",
	props:['tag']
}
</script>

<template lang="pug">
div(:class="['tag', 'color-'+tag]")
</template>

<style scoped>
.tag{
	width: 2rem;
	height: 2rem;
	border: 1px solid;
	border-radius: 0.2rem;
	cursor: pointer;
}

.color-0{
	background-color: red;
}

.color-1{
	background-color: orange;
}

.color-2{
	background-color: yellow;
}

.color-3{
	background-color: green;
}

.color-4{
	background-color: blue;
}

.color-5{
	background-color: indigo;
}

.color-6{
	background-color:purple;
}

@media (max-width:768px) {
	.tag{
		width:1.5rem;
		height: 1.5rem;
	}
}

@media (max-width:576px) {
	.tag{
		width:1rem;
		height: 1rem
	}
}
</style>