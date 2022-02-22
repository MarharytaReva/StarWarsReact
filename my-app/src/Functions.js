
import CardComp from './components/ChildComponents/Card';

 function getId(url){
    let urlWithoutLast = url.substring(0, url.length - 1);
   
    let lastIndex = urlWithoutLast.lastIndexOf('/')
   
    let id = urlWithoutLast.substring(parseInt(lastIndex) + 1, urlWithoutLast.length)
    return id
}

function setListPeople(data, entityName){
    let dispalyedList = data.results.map(item => {
                let id = getId(item.url)
                
                return <CardComp title={item.name}
                                 text={`gender: ${item.gender}`}
                                 id={id}
                                 img='p.jpg'
                                 entity={entityName}></CardComp>
            })
    return dispalyedList
}

function setListPlanets(data, entityName){
    let dispalyedList = data.results.map(item => {
        let id = getId(item.url)
        return <CardComp title={item.name}
                          text={`climate: ${item.climate}`}
                          id={id}
                          img='pl.jpg'
                          entity={entityName}></CardComp>
    })
    return dispalyedList
}

function setListStarships(data, entityName){
    let dispalyedList = data.results.map(item => {
        let id = getId(item.url)
        return <CardComp title={item.name}
                          text={`model: ${item.model}`}
                          id={id}
                          img='v.jpg'
                          entity={entityName}></CardComp>
    })
    return dispalyedList
}

function setListVehicles(data, entityName){
    let dispalyedList = data.results.map(item => {
        let id = getId(item.url)
        return <CardComp title={item.name}
                          text={`manufacturer: ${item.manufacturer}`}
                          id={id}
                          img='bg.jpg'
                          entity={entityName}></CardComp>
    })
    return dispalyedList
}

function setListFilms(data, entityName){
    let dispalyedList = data.results.map(item => {
        return <CardComp title={item.title}
                          img='bg_1.jpg'
                          text={`director: ${item.director}`}
                          id={item.episode_id}
                          entity={entityName}></CardComp>
    })
    return dispalyedList
}

export { getId, setListPeople, setListPlanets, setListStarships, setListVehicles, setListFilms };