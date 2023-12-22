import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
	state: () => {
		return {
			tasks: [
				{id: 1, content: 'first', tag: 0},
				{id: 2, content: 'second', tag: 1},
				{id: 3, content: 'third', tag: 2},
				{id: 4, content: 'Ders Calis Ders calismazsan kotu olur ve sinifta kalirsin', tag: 3 },
				{id: 5, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et consectetur ad ut ipsam minus eum ipsa voluptas laudantium. Tenetur temporibus doloribus eveniet magni quam ratione cupiditate mollitia nostrum asperiores?', tag: 4 },
			],
		}
	},
	
	getters: {
		tagFilter: (state) => {
			return (tag) => state.tasks.filter(t => t.tag == tag)
		},
		getActiveTags() {
			const activeTags = []
			for(let i = 0; i <= 6; i++) {
				if(this.tasks.some(t => t.tag === i)) {
					activeTags.push(i)
				}
			}
			return activeTags
		}
	},
	
	actions: {
		add(task) {
			this.tasks.push(task)
		},

		delete(taskId) {
			this.tasks = this.tasks.filter(t => t.id != taskId)
		},

		changeTag(taskId){
			const index = this.tasks.findIndex(t => t.id == taskId)
			this.tasks[index].tag = ( this.tasks[index].tag + 1 ) % 7
		}
	}
})