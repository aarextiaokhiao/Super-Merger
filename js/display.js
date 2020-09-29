let display = {
	m: []
}

let DISPLAYS = {
	update() {
		display.s = player.scrap.toFixed(2)
		display.e = player.energy.toFixed(2)

		display.m = []
		for (var i = 1; i <= tmp.space; i++) {
			let m = player.mergers[i]
			if (m) display.m.push({
				t: m.tier,
				d: "+0 scrap/s"
			})
		}
	}
}