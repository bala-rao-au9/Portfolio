import React from 'react'
import html from "../../public/html.png"
import reactjs from "../../public/reactjs.png"
import css from "../../public/css.jpg"
import java from "../../public/java.png"
import javascript from "../../public/javascript.png"
import oracle from "../../public/oracle.png"
import spring from "../../public/spring.png"
import springBoot from "../../public/springBoot.jpg"

function Experience() {
  // stor in array amd then map
  const cardItem=[
    {
      id:1,
      logo:html,
      name:"html"
    },
    {
      id:2,
      logo:css,
      name:"css"
    },
    {
      id:3,
      logo:reactjs,
      name:"reactjs"
    },
    {
      id:4,
      logo:spring,
      name:"spring"
    },
    {
      id:5,
      logo:oracle,
      name:"oracle"
    },
    {
      id:6,
      logo:javascript,
      name:"Javascript"
    },
    {
      id:7,
      logo:springBoot,
      name:"springBoot"
    },
    {
      id:8,
      logo:java,
      name:"Java"
    },
  ]
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p >I've more than 8 Months of Experience in below technologies</p>
        {/* Map the array */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {
            cardItem.map(({id,logo,name}) => (
              <div className="flex flex-col items-center justify-center border-2[px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300  "
              key={id}
              >
                <img src={logo} className="w-[150px]   rounded-full "  alt="" />
              <div className="">{name}</div>
             
              
              </div>
              
             ))
          }
        </div>
        </div>
    </div>
    
    )
}

export default Experience