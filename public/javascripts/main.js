// メンバー取得
const fetchMembers = () => {
  fetch('/api/getAllMember')
  .then(res => {
    if(res.ok) {
      res.json()
      .then(json => {
        return json
      })
    }
  })
}

// 対象メンバー取得
const fetchTrgMember = (id) => {
  fetch(`/api/getMember/${id}`)
  .then(res => {
    if(res.ok) {
      res.json()
      .then(json => {
        return json
      })
    }
  })
}

// News取得
const fetchNews = () => {
  fetch(`/api/getNews`)
  .then(res => {
    if(res.ok) {
      res.json()
      .then(json => {
        return json
      })
    }
  })
}