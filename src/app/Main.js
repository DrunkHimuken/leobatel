// Imports
import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../app/components/Footer'
import { Container } from 'reactstrap'

// Import Context
import { MyContext } from 'context'

// Import pages
import asyncComponent from "./AsyncComponent";


// Import Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Import components
import Header from './components/Header'

// Starters 

library.add(fab)

const Home = asyncComponent(() => import('./pages/Home'));
const News = asyncComponent(() => import('./pages/News'));
const About = asyncComponent(() => import('./pages/About'));
const Portfolio = asyncComponent(() => import('./pages/Portfolio'));
const Contact = asyncComponent(() => import('./pages/Contact'));

// Component Implementation
const Main = () => {
  return (
    <React.Fragment>
      <MyContext.Consumer >
        {context => <Header context={context}/>}
      </MyContext.Consumer>

      <Container className="content">
        <Route exact={true} path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/news/:id" component={News} />
        <Route path="/contact" component={Contact} />
      </Container>

      <Footer />
    </React.Fragment>
  )
}

export default Main