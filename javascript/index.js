/// Scroll to elements
const scrollButtons = Array.from(document.querySelector('#nav-list').children)
scrollButtons.forEach((elem) => {
	elem.addEventListener('click', (e) => {
		let id = document.querySelector(
			`#${e.target.innerHTML.split(' ').join('').toLowerCase()}`
		)

		id.scrollIntoView({
			behavior: 'smooth',
			inline: 'start',
		})
	})
})

/// Teams Carousel

//accordion

const accItems = Array.from(document.querySelectorAll('.accordion > .acc-item'))

accItems.forEach((elem) => {
	let thisBtn = elem.querySelector('button')
	let thisPar = elem.querySelector('.content')
	thisBtn.addEventListener('click', (e) => {
		thisPar.classList.toggle('acc-active')
	})
})
