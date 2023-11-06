import FileSaver from 'file-saver'

import { surpriseMePrompts } from "../constants"

// function to get a random number and a random non-repeatable prompt
export function getRandomPrompt(prompt) {
    const randomindex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomindex]

    if(randomPrompt === prompt) return getRandomPrompt(prompt)
    
    return randomPrompt
}

// function to save a photo using FileSaver
export async function downloadImage(_id, photo)
{
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}