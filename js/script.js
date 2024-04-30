const getData = (url) => 
	fetch(url)
	.then(response => response.json())

const sendData = (url, data) => 
	fetch(url, {
		method: 'POST',
		body: data,
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
	.then(response => response.json())

getData('./db.json')
	.then(data => 
		sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data))
			.then(data => console.log(data))
			.catch(error => console.log(error))
	)
	.catch(error => console.log(error))
	


