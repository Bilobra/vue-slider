// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]


const app = new Vue({
	el: '#root',

	data:{
		slides,
		
		currentIndex: 0,
	},

	methods: {
		goNext(){
			
			this.currentIndex++
			if(this.currentIndex === slides.length){
				this.currentIndex = 0
			}

		},
		goPrev(){
			this.currentIndex--
			if(this.currentIndex < 0){
				this.currentIndex = slides.length - 1
			}
		}
	},
})


// bind classe active

// funzione che al click ,
// la classe active si aggiunge all'index ++