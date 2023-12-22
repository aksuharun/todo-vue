<script>
import { watch, ref, watchEffect } from 'vue'
import { useTaskStore } from '@/stores/task'
import TaskView from './components/task-view.vue'
import TaskForm from './components/task-form.vue'
import Tag from './components/tag.vue'

export default {
	components:{
		TaskView,
		TaskForm,
		Tag
	},
	setup() {
		const taskStore = useTaskStore()
		const showFilter = ref(false)
		const activeFilter = ref(false)

		function changeFilter(tag) {
			if(activeFilter.value === false || activeFilter.value !== tag) {
				activeFilter.value = tag
				return
			}
			activeFilter.value = false
		}
	// If there is no object in filtered tag, then set active filter to false
		watch(
			() => taskStore.tasks, 
			() => {
			if(activeFilter && taskStore.tagFilter(activeFilter.value).length < 1)
				activeFilter.value = false
		},
		{ deep: true })
		return { taskStore, showFilter, activeFilter, changeFilter}
	}
}

</script>

<template lang="pug">
main

	div(class="upper")
		TaskForm(class="form" :tags="activeFilter.value")
		div.filter-container
			font-awesome-icon(
				:icon="['fas', 'filter']"
				:class="['fa-filter', 'icon']"
				@click="showFilter = !showFilter"	
			)
			div.filter-tags(v-if="showFilter && taskStore.getActiveTags.length > 0")
				Tag(
						v-for="tag in taskStore.getActiveTags" 
						@click="changeFilter(tag)"
						:tag="tag" 
						class="tag-filter"
				)
	div.task-container
		TaskView(
			v-if="activeFilter === false"
			v-for="task in taskStore.tasks"
			:task="task"
		)

		TaskView(
			v-else
			v-for="task in taskStore.tagFilter(activeFilter)" 
			:task="task"
		)
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
:root{
	--primary-background-color: #FFFFFF;
	--secondary-background-color: #F9F9F9;
	--accent-color:#071952;
	--text-color: #213547;
	font-family: 'Roboto', sans-serif;
}
body {
background-color:var(--primary-background-color);
}

main{
	min-width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.upper{
	width: 50rem;
	display: grid;
	grid-template-columns: repeat(9,1fr);
	margin: 2rem
}

.form{
	grid-column-start:5
}

.filter-container{
	grid-column-start: 9;
}
.filter-tags{
	display: flex;
	flex-direction: column;
	background-color: var(--secondary-background-color);
	border: 2px solid var(--accent-color);
	position: absolute;
	border-radius: .2rem;
	padding: .5rem;
	margin-top:1rem;
	margin-left: -1rem;
}

.filter-tags > div {
	margin: 0.2rem
}

.fa-filter{
	font-size: 2rem;
	color: var(--accent-color);
}

.icon{
	cursor: pointer;
}

@media (max-width:992px) {
	.filter-container{
		grid-column-start:8 ;
	}
}

@media (max-width:768px) {
	.form{
		grid-column-start:5;
	}
	.filter-container{		
		grid-column-start:7;
	}
}

@media (max-width:576px) {
	.icon{
		font-size:1rem
	}
	.filter-container{
		grid-column-start:7;
		margin-left:-3rem
	}
}


</style>