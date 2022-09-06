const teamnext = document.querySelector('.team-car-next')
const teamprev = document.querySelector('.team-car-prev')
const teamCar = document.querySelector('.carousel-team-list')

const teamindex = Array.from(teamCar.children)
console.log(teamindex, teamnext, teamprev, teamCar)

let teamcurrent = 0

teamnext.addEventListener('click', () => {
	teamcurrent += 1
	if (teamcurrent > teamindex.length - 1) {
		teamcurrent = 0
	}
	teamindex[teamcurrent].scrollIntoView({
		behavior: 'smooth',
		inline: 'start',
		block: 'nearest',
	})
})

teamprev.addEventListener('click', () => {
	teamcurrent -= 1
	if (teamcurrent < 0) {
		teamcurrent = 0
	}
	teamindex[teamcurrent].scrollIntoView({
		behavior: 'smooth',
		inline: 'start',
		block: 'nearest',
	})
})
