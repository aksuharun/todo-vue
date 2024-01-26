import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
	state: () => {
		return {
			tasks: [
				{id: 1, content: 'You can create unlimited tasks above.', tag: 0},
				{id: 2, content: 'Click the colored square to change the tag.', tag: 1},
				{id: 3, content: 'Click the trash bin icon to delete the task.', tag: 2},
				{id: 4, content: 'You can also filter tag from above.', tag: 3 },
				{id: 5, content: 'Work Hard, Play Hard!', tag: 4 },
			],
		}
	},
	
	getters: {
		tagFilter: (state) => {
			return (tag) => state.tasks.filter(t => t.tag == tag)
		},
		getActiveTags() {
			return [...new Set(this.tasks.map(task => task.tag))]
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
