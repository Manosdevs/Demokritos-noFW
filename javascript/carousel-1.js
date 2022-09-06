const next = document.querySelector('.carousel-1 > .next')
const prev = document.querySelector('.carousel-1 > .prev')
const Car = document.querySelector('.carousel-1-list')

const index = Array.from(Car.children)

let current = 0

next.addEventListener('click', () => {
	current += 1
	if (current > index.length - 1) {
		current = 0
	}
	index[current].scrollIntoView({
		behavior: 'smooth',
		inline: 'start',
		block: 'nearest',
	})
})

prev.addEventListener('click', () => {
	current -= 1
	if (current < 0) {
		current = 0
	}
	index[current].scrollIntoView({
		behavior: 'smooth',
		inline: 'start',
		block: 'nearest',
	})
})
