const getData = (url) => 
	fetch(url)
	.then(response => response.json())

const sendHTTPRequest = (url, data) => {
	let xhr = new XMLHttpRequest(); 

	xhr.open('POST', url, true)
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(data);
	
	xhr.onload = function() {
		if (xhr.status != 201) { 
			console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
		} else {
			console.log(xhr.response); 
		}
	}

}

getData('./db.json')
	.then(data => 
		sendHTTPRequest('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data)),
	)
	.catch(error => console.log(error))
	


