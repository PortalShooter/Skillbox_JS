'use strict'
let roadMines = [true, true, true, true, true, true, true, true, true, true]

let position
let n = 0
step: for(position in roadMines){
	console.log(`Танк переместился на ${+position + 1}`)

	for(roadMines[position]; roadMines[position] == true;){
		if(n <= 1){
			n += 1
			console.log('Танк поврежден')
			continue step;
		}	else if(n == 2){
			console.log('Танк уничтожен')
			break step;
		}
	}
}

