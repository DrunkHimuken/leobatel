import React from 'react'

import withLanguage from '../withLanguage'

//Import Components
import NewsList from '../components/NewsList'
import { CoverImage } from '../components/ImageFrame'

// Import images
import help from '../../images/Helping.jpg'

// Import CSS
import 'app/styles/grid.css'
import 'app/styles/components/links.css'
import 'app/styles/pages/about.css'

class About extends React.Component {
  render() {    
    return (
        <React.Fragment>
          <CoverImage>
            <img src={help} alt={'Imagem de ajuda'}/>
          </CoverImage>
          <NewsList />
        </React.Fragment>
    )
  }
}

export default withLanguage(About)