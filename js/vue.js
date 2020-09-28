let VUE = {
	load() {
		let comps = VUE.components
		let compKeys = Object.keys(comps)
		for (let c in compKeys) {
			Vue.component(compKeys[c], comps[compKeys[c]])
		}

		let app = new Vue({
			el: "#container",
			data: {}
		})
	},
	components: {
		merger: {
			props: ["test"],
			template: "<div class='merger'><div class='merger_center'>{{test}}</div></div>"
		}
	}
}