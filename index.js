function addId(el) {
  const li = document.createElement("li");
  li.textContent = el;
  document.body.append(li);
}

function submitData(nameEl, emailEl) {
  const url = "http://localhost:3000/users";

  // Make POST request to fill users with data
  // 1) Get the data we want to POST
  // 2) Set up the fetch to make a post
  // 3) Call invoke it to do the action

  let userObject = {
    name: nameEl,
    email: emailEl,
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userObject),
  })
    .then((res) => res.json())
    .then((data) => {
      addId(data.id);
    })
    .catch((res) => addId(res));
}
