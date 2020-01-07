import React from 'react'
import ContactCard from './components/ContactCard'

function App(){
  return(
      <div className="contacts">
        <ContactCard contact={{
          name: "Steve Jobs",
          imgUrl: "https://fainaidea.com/wp-content/uploads/2019/01/apple8.0.jpg",
          phone: "39493493",
          email: "dfdfdf@mail.com"
        }}/>
        <ContactCard contact={{
          name: "Nina Eva",
          imgUrl: "https://andro-news.com/images/content/33691-59605-header-l.jpg",
          phone: "37867866",
          email: "dfdwewwee@mail.com"
        }}/>
        <ContactCard contact={{
          name: "Vladimir Olegovich",
          imgUrl: "https://www.apple.com/v/iphone/home/ac/images/meta/og__byyl1jl4xsvm.png",
          phone: "7878756",
          email: "cgvdf@mail.com"
        }}/>
      </div>
    )
}

export default App