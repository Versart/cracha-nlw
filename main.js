const linksSocialMedia = {
  github: 'Versart',
  youtube: 'UCE6G7zh5wArySMPIMVxgW_Q',
  instagram: 'w35l31',
  facebook: 'wesley.versart',
  twitter: 'teste'
}

function changeSocialMedia() {
  /*document.getElementById('userName').textContent = 'Yasuo Hasaki'*/
  /*Só pode fazer esse comando se for um id*/
  userName.textContent = 'Yasuo Hasaki'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    alert(li.children[0].href)
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      ;(userName.textContent = data.login),
        (bioUser.textContent = data.bio),
        (nameGit.href = data.html_url),
        (userPhoto.src = data.avatar_url),
        (nameUserGit.textContent = data.login)
    })
}

getGitHubProfileInfos()
