const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    location: "Queta",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    lookingfor: "female",
  },
  {
    name: "Ahsan",
    age: 32,
    gender: "male",
    location: "Sibbi",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    lookingfor: "female",
  },
  {
    name: "Alexa",
    age: 32,
    gender: "female",
    location: "Lahore",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    lookingfor: "male",
  },
];

const profiles = profileIterator(data);

function profileIterator(profiles) {
  let next_index = 0;

  return {
    next: function () {
      return next_index < profiles.length
        ? { value: profiles[next_index++], done: false }
        : { done: true };
    },
  };
}

nextProfile();

document.getElementById("next_btn").addEventListener("click", nextProfile);

function nextProfile() {
  const current_profile = profiles.next().value;
  if (!current_profile) {
    window.location.reload();
  } else {
    document.getElementById("profile_display").innerHTML = `
      <ul class="list-group">
         <li class="list-group-item">Name: ${current_profile.name}</li>
         <li class="list-group-item">Age: ${current_profile.age}</li>
         <li class="list-group-item">Gender: ${current_profile.gender}</li>
         <li class="list-group-item">Location: ${current_profile.location}</li>
         <li class="list-group-item">Looking For: ${current_profile.lookingfor}</li>
   `;
    document.getElementById("image_display").innerHTML = `
      <img src="${current_profile.image}">
   `;
  }
}