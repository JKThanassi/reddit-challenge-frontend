import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

/**
 * The Interface specifying the props to be passed to Post
 */
interface Props {
    postLink: string,
    title: string,
    extLink: string,
    score: number,
    submitter: string,
    isLinkPost: boolean
}

/**
 * A component which renders a reddit post as a card
 * @param postLink The reddit permalink to the post (string)
 * @param title The title of the post (string)
 * @param extLink The external link contained by the post (if link post)
 * @param score the score of the post (int)
 * @param isLinkPost A bool representing if this is a link post
 * @param submitter The submitter of the post (string)
 */
const Post: React.FC<Props> = ({postLink, title, extLink, score, isLinkPost, submitter}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Subtitle>
                    {`Submitted by: ${submitter}`}
                </Card.Subtitle>
                <Card.Text>{`Score: ${score}`}</Card.Text>
                <Button href={postLink} className={'mr-1'}>Post Link</Button>
                {isLinkPost && <Button href={extLink} className={'ml-1'}>External Link</Button>}
            </Card.Body>
        </Card>
    );
}

export default Post