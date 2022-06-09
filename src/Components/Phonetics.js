import React from 'react'

function Phonetics(props) {
  let audio = props.phonetic.audio;
  let nationality = audio.slice((audio.length - 6), (audio.length - 4))
  console.log(props)
  console.log('nationality: ', nationality)

  return (
    <li className='phonetics'>
      <strong>{nationality.toUpperCase()}</strong>
      {"   "}
      <a
        href={props.phonetic.audio}
        target="_blank"
        className="phonetic-audio"
        rel="noreferrer"
      >
        <i className="fas fa-volume-up"></i>
      </a>
      <p className='phonetic-text'>{props.phonetic.text}</p>
    </li>
  )
}

export default Phonetics