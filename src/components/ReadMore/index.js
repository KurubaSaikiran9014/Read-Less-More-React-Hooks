import {useState} from 'react'
import {Main, Head, Desc, Para, Image, Mini, Button} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isShort, changeContent] = useState(true)
  const onClickButton = () => {
    changeContent(prevState => !prevState)
  }
  return (
    <Main>
      <Mini>
        <Head>React Hooks</Head>
        <Desc>Hooks are a new addition to React</Desc>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        {isShort ? (
          <Para>{reactHooksDescription.slice(0, 170)}</Para>
        ) : (
          <Para>{reactHooksDescription}</Para>
        )}
        <Button type="button" onClick={onClickButton}>
          {isShort ? 'Read More' : 'Read Less'}
        </Button>
      </Mini>
    </Main>
  )
}

export default ReadMore
