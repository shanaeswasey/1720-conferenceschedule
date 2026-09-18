//Import the JSON formatted data
import { sessions } from "../data/sessions.mjs";
//console.log(sessions)

const destination = document.querySelector("#schedule-here")

sessions.forEach(item => {
    //console.log(item)
    console.log(item.start_time)
    console.log(item.end_time)
    console.log(item.title)
    console.log(item.description)
    console.log(item.speaker)
    console.log(item.speaker_title)
    console.log(item.photo_url)


    const row = document.createElement('tr')

    //Creates the First Column
    const time = document.createElement('td')
    time.innerHTML = `<p class="time">${item.start_time} - ${item.end_time}</p>`

    //Creates the Second Column
    const topic = document.createElement('td')
    topic.innerHTML = `<p class="title">${item.title}</p>  <p>${item.description}</p>`

    //Creates the Third Column
    const speaker = document.createElement('td')
    speaker.innerHTML = `
    <p class="name">${item.speaker}</p>
    <img src="images/${item.photo_url}" alt="${item.speaker}">
    <p class="desc">${item.speaker_title}</p>`

row.appendChild(time)
row.appendChild(topic)
row.appendChild(speaker)


destination.appendChild(row)
})