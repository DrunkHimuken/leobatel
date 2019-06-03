import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { Title, SubTitle, ImageWrapper, ImageSubtitle, Author } from '../Page/Page.js'
import { Quotes } from '../Page/Quotes'
import { CoverImage } from '../Page/ImageFrame'
import { BASE_URL } from '../../utils/constants'

const NewsImage = styled.img`
  margin: auto;
  max-height: 500px;
  text-align: center;
`

const INITIAL_STATE = {
    imageCounter: 0,
    news: []
}

export class NewsComponent extends Component {

    state = { ...INITIAL_STATE }

    componentDidMount(){
        const { props } = this
    }
    
    componentDidUpdate(prevProps){
        const { props } = this
        if(JSON.stringify(prevProps.news) !== JSON.stringify(props.news) && props.news){
            this.setState({ imageCounter: 0 }, () => this.formatBodyText(props.news))
        }
    }

    formatImage = (sp, imageCounter) => {

        const { props } = this
        sp = sp.replace('/image', '')
        sp = sp ? Number(sp.trim()) - 1 : imageCounter

        if(props.news.detail[sp] && props.news.detail[sp]){
            const image = {
                type: "i",
                photo: Number(sp),
                name: props.news.detail[sp],
                subtitle: props.news.detail[sp],
                url: props.news.photo[sp]
            }
            return image
        }
        return 
    }

    formatTextType = (sp, type) => {
        const paragraph = {
            type: type,
            content: sp.trim()
        }
        return paragraph
    }

    formatAuthor = (author, date) => {
        const credits = {
            type: 'a',
            author: author,
            date: moment(date).format("DD MMMM"),
            url: 'uploads\\LEOBatelLogo.png'
        }
        return credits
    }

    formatBodyText(values) {
        const split = values.body.split("\n")
        let data = []
        let imageCounter = 0
        split.forEach(sp => {
            if (sp.trim().substring(0, 6).includes('/image')) {
                data.push(this.formatImage(sp, imageCounter))
                imageCounter++
            }
            else if (sp.trim()) {
                data.push(this.formatTextType(sp, 'p'))
            }
        })

        data.unshift(this.formatAuthor(values.author, values.date))
        data.unshift(this.formatTextType(values.subtitle, 's'))
        data.unshift(this.formatTextType(values.title, 't'))

        console.log(data)

        this.setState({ news: data })
    }

    renderNewsItem(item, index) {
        switch (item.type) {
            case 'p':
                return <p key={index}>{item.content}</p>
            case 'q':
                return <Quotes sign={item.sign} key={index}>{item.content}</Quotes>
            case 'i':
                return <ImageContainer image={item} key={index} />
            case 'c':
                return (
                    <CoverImage key={index} cover={item.cover}>
                        <img src={item.content} alt={item.name} />
                    </CoverImage>
                )
            case 't':
                return <Title key={index}>{item.content}</Title>
            case 's':
                return <SubTitle key={index}>{item.content}</SubTitle>
            case 'a':
                return <Author author={item} key={index} />
            default:
                return ''
        }
    }

    render() {
        const { state } = this
        return (
            <div className='page page-news'>
                {state.news && state.news.map((item, index) => this.renderNewsItem(item, index))}
            </div>
        )
    }

}

const ImageContainer = ({ image, link }) => (
    <ImageWrapper>
        <NewsImage src={`${BASE_URL}${image.url.replace('\\', '/')}`} alt={image.name} title={image.name} />
        <ImageSubtitle>{image.subtitle}</ImageSubtitle>
    </ImageWrapper>
)

export default NewsComponent