// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  ContentContainer,
  MainHeading,
  HeadingDescription,
  Image,
  ReactDescription,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [readMore, setReadMore] = useState(false)

  const reactDescription = readMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const buttonText = readMore ? 'Read Less' : 'Read More'

  const onClickButton = () => {
    setReadMore(prevState => !prevState)
  }

  return (
    <AppContainer>
      <ContentContainer>
        <MainHeading>React Hooks</MainHeading>
        <HeadingDescription>
          Hooks are a new addition to React
        </HeadingDescription>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <ReactDescription>{reactDescription}</ReactDescription>
        <Button onClick={onClickButton}>{buttonText}</Button>
      </ContentContainer>
    </AppContainer>
  )
}

export default ReadMore
