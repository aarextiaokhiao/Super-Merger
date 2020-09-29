let player = {
	//Save data
}
let interval = {
	//Tick interval data
}

let MAIN = {
	load() {
		SAVING.load()
		DISPLAYS.update()
		MAIN.interval()
		VUE.load()
		SAVING.startAutoSave()
	},
	tick(diff) {
		player.scrap = player.scrap.add(player.energy.times(diff))
		DISPLAYS.update()
	},
	interval() {
		clearInterval(interval.main)
		interval.ticking = false
		interval.main = setInterval(function() {
			if (interval.ticking) return
			interval.ticking = true
			let now = new Date().getTime()
			if (player.time) MAIN.tick((now - player.time) / 1e3)
			player.time = now
			interval.ticking = false
		}, 50)
	}
}