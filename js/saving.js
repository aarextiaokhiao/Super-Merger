let SAVING = {
	id: "sUpEr_mErGeR",
	newSave() {
		return {
			scrap: 0,
			energy: 1,
			mergers: {
				1: {
					type: "f",
					tier: 1
				},
				2: {
					type: "f",
					tier: 1
				},
				3: {
					type: "sc",
					tier: 2
				},
			},
			time: 0,
			options: {}
		}
	},
	version() {
		return {
			release: 0,
			beta: 0,
			alpha: 1
		}
	},
	compile(data) {
		data.version = this.version()

		data.scrap = D(data.scrap)
		data.energy = D(data.energy)

		return data
	},
	save() {
		localStorage.setItem(btoa(SAVING.id), btoa(JSON.stringify(player)))
	},
	load() {
		let save
		let saveData = localStorage.getItem(btoa(this.id))
		if (saveData != null) save = JSON.parse(atob(saveData))
		else save = this.newSave()

		player = this.compile(save)
	},
	startAutoSave() {
		setInterval(SAVING.save, 5000)
	}
}