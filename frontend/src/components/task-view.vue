<script>
import { useTaskStore } from '@/stores/task';
import Tag from './tag.vue';
export default {
	name: "TaskView",
	props: ['task'],
	components: { Tag },
	setup() {
		const taskStore = useTaskStore()
		return { taskStore }
	}
}
</script>

<template lang="pug">
div.task
	Tag(
		:tag="task.tag"
		@click="taskStore.changeTag(task.id)"
		)
	span {{ task.content }}
	font-awesome-icon(
		:icon="['fas', 'trash']" 
		:class="['trash', 'icon']"
		@click="taskStore.delete(task.id)"
	)
</template>

<style scoped>
.task{
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 50rem;
	padding: 1rem;
	border: 2px solid var(--primary-bacground-color);
	-webkit-box-shadow: -1px 1px 3px 0px var(--text-color); 
	box-shadow: -1px 1px 3px 0px var(--text-color);
	border-radius: .2rem;	
	margin-bottom: 1rem;
}

.task > span {
	width: 75%;
	font-size:1.5rem
}

.trash{
	font-size: 1.5rem;
	padding:1rem;
	color:#585858cc
}

.trash:hover{
	color:#b60000cc;
	scale: 1.1;
	transition: 0.2s;
}

@media (max-width:1200px) {
	.task{
		width: 35rem;
	}	
}

@media (max-width:768px) {
	.task{
		width: 25rem;
	}
	.task > span{
		font-size: 1rem;
		width: 60%
	}
}

@media (max-width:576px) {
	.task{
		width:80vw;
		padding:.5rem;
	}
	.task > span{
		font-size:.8rem
	}

	.trash{
		font-size:1rem
	}
}

</style>