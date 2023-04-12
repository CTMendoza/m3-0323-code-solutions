import { useState } from "react";
import './Accordion.css'



function Topic ({topic, onShow, isActive}) {
console.log(topic)
    return  <>
              <h2 onClick={() => onShow(topic.id)} className='title' key={topic.id}>{topic.title}</h2>
              <p className= 'summary' key={topic.id}>{topic.summary}</p>
            </>
}

export default function Accordion ({topicsList}) {
  const [activeIndex, setActiveIndex] = useState(null);
    function handleClick (id) {
      console.log('activeIndex is: ', activeIndex)
      console.log('id is: ', id)
    // if(activeIndex === topic.id) {
      setActiveIndex(id)
    // }
  };

  return (
    <section>
      {topicsList.map( (topic) =>
          <Topic  isActive={activeIndex === topic.id} onShow={() => handleClick(topic.id)}  topic={topic} />
      )}
    </section>
  )
}
