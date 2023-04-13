import { useState } from "react";
import './Accordion.css'



function Topic ({topic, onShow, isActive}) {
    console.log('isActive value: ', isActive)
    return  <>
              <h2 onClick={onShow} className='title' key={topic.id}>{topic.title}</h2>
              {isActive && <p className='summary'  key={topic.id}>{topic.summary}</p>}
            </>
}

export default function Accordion ({topicsList, topic}) {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick (id) {
    if(id === activeIndex) {
      return setActiveIndex(null)
    }
      setActiveIndex(id)
  };



  return (
    <section>
      {topicsList.map( (topic) =>
          <Topic  isActive= {activeIndex === topic.id} onShow={() => handleClick(topic.id)}  topic={topic} />
      )}
    </section>
  )
}
