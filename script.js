// to chect js -working console.log("hello");
// if u given name is in input text-name should shown in console.

const userinput = document.getElementById("gitusers")
// if click button u get details
const getdetailButton = document.getElementById("gitbutton")
const profileinfo = document.getElementById("profileinfo")
// normal ftn to async ftn just click after asyn
getdetailButton.addEventListener("click", async () => {

  const username = userinput.value
  // console.log(username);

  // asyn -await data fetch-using github api to fetch the data from server
  const res = await fetch('https://api.github.com/users/' + username)
  const data = await res.json();
  // console.log(data);
  getprofile(data)
})
// it used to get detail from server
function getprofile(data) {
  console.log(data);

  // using card display the other output
  profileinfo.innerHTML = `<div class="card">
    <div class="card-img">
    <img src=${data.avatar_url}alt=${data.name}>
    </div>
    <div class="card-body">
    <div class="card-title">${data.name}</div>
    <div class="card-subheading">${data.login}</div>
    <div class="card-text"> <p>${data.bio}</p>
    <p><i class="fa-solid fa-user-group"></i> ${data.followers} Followers ${data.following} Following</p>
    <p><i class="fa-solid fa-location-dot"></i> ${data.location}</p>
    <button>
    <a href=${data.html_url} target="_blank">Visit Profile</a>
    </button>
    </div>
    </div>
    </div>`
}
async function getrepo(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const projects = await res.json();
  for (let i = 0; i < projects.length; i++) {
    repoinfo.innerHTML += `<div class="card">
        <div class="card-body">
        <div class="card-title">${projects[i].name}</div>
        <div class="card-subHeading">${projects[i].language}</div>
        <div class="card-text">
        <button>
   <a href=${projects[i].html_url} target="_blank">Visit Repo</a>
   </button>
   </div>
   </div>
   </div>`;
  }
}

