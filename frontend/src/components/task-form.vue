<script>
import { useTaskStore } from "@/stores/task"
import { ref } from 'vue'
export default {
	name: 'TaskForm',
	setup() {
		const taskStore = useTaskStore()
		const newTask = ref('')

		const handleSubmit = () => {
			if(newTask.value.length > 0) {
				taskStore.add({
					id: Date.now(),
					content: newTask.value,
					tag: 0
				})
				newTask.value = ''
			}
		}
		return { taskStore, newTask, handleSubmit}
	}
}

</script>

<template lang="pug">
form(@submit.prevent="handleSubmit")
	input(
		type="text"
		v-model="newTask"
		placeholder="Enter a task to do"
		onfocus="this.placeholder = ''"
	)
	button
		font-awesome-icon(:icon="['fas', 'plus']")
</template>

<style scoped>
form{
	display: flex;
}
input[type="text"]{
	width: 18rem;
	height: 1rem;
	padding: 1rem;
	font-size: 1.2rem;
	border:none;
	border-bottom: 1px solid var(--accent-color);
}
input[type="text"]:focus{
	outline: none;
	border-bottom:2px solid var(--accent-color);
}
button{
	background-color:transparent;
	border:none;
	cursor: pointer;
	font-size: 2rem;
}

@media (max-width:992px) {
	input[type=text]{
		width:14rem;
	}
}

@media (max-width:768px) {
	
	input[type="text"]{
		font-size: 1rem
	}
	button{
		font-size:1.5rem
	}
}
	@media (max-width:576px) {
		input[type="text"]{
			font-size: .8rem;
			width: 10rem;;
			padding:0.3rem
		}
		button{
			font-size:1rem
		}
	}


</style>