import React, { useState } from "react"
import { Heading } from "../common/Heading"
import { portfolio } from "../data/dummydata"


const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
export const Portfolio = () => {
  const [list, setLists] = useState(portfolio)
 
  return (
    <>
      <article>
        <div className='container'>
          <Heading title='Frontend Projects' />
          <div className='content grid3'>
            {list.map(( 
            item) => (
              <div className='box' data-aos='fade-up'>
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <div className='overlay'>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
