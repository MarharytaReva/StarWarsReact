


class OhShit{
    getMethod(entityName, funcSuccess){
        fetch(`https://swapi.dev/api/${entityName}/`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log('data', data)
            funcSuccess(data)
        })
    }
  getPage(url, funcSuccess){
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log('data', data)
        funcSuccess(data)
    })
  }
    getItem(entityName, id, funcSuccess){
        fetch(`https://swapi.dev/api/${entityName}/${id}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log('data', data)
            funcSuccess(data)
        })
    }
}

const service = new OhShit();
export default service