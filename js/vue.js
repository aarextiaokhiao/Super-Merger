let VUE = {
	load() {
		let comps = VUE.components
		let compKeys = Object.keys(comps)
		for (let c in compKeys) {
			Vue.component(compKeys[c], comps[compKeys[c]])
		}

		let app = new Vue({
			el: "#app",
			data: {
				display
			}
		})
	},
	components: {
		merger: {
			props: ["id"],
			template: `
				<div class='merger'>
					<div class='merger_center'>{{display.m[id - 1].t}}</div>
					<div class='merger_production'>{{display.m[id - 1].d}}</div>
				</div>
			`
		}
	}
}