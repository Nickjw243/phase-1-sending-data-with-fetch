// Add your code here

function addUl(el) {
    const body = document.getElementsByTagName('body')
    const createEl = document.createElement('ul')
    // createEl.textContent = el
    body.append(createEl)
}

function submitData(nameEl, emailEl) {
    const url = "http://localhost:3000/users"
    // fetch(url)
    //     .then((res) => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })

    // Make POST request to fill users with data 
    // 1) Get the data we want to POST
    // 2) Set up the fetch to make a post 
    // 3) Call invoke it to do the action 

    let userObject = {
        "name": nameEl,
        "email": emailEl,
    }


    // fetch(url)
    //     .then((res) => res.json())
    //     .then(data => {
    //         console.log(data.email)
    //     })

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Accept": "application/json",
        },
        body: JSON.stringify(userObject)
    })
        .then((res) => res.json())
        .then((data) => {
            return data.id
        })
}