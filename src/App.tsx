import React, {useState} from 'react';
import Post from "./components/post/post";
import {Button, Modal, Dropdown, DropdownButton, Form, FormControl, Navbar, Row, Col, Container} from "react-bootstrap";
import {PostResponse, TopType} from "./components/post/postContracts";
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * The main component for the reddit-2.0 app
 * Renders the nav bar and handles getting the posts
 */
function App() {
    const [posts, setPosts] = useState([]);
    const [sub, setSub] = useState('');
    const [count, setCount] = useState(20);
    const [top, setTop] = useState(TopType.ALL);
    const [showError, setShowError] = useState(false);

    return (
        <>
            <Modal animation={false} show={showError} onHide={() => setShowError(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Search Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{`Uh oh, there was an error trying to fetch posts from: ${sub}. Please try again.`} </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowError(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Navbar sticky={'top'} bg={'light'} expand={'lg'}>
                <Navbar.Brand>Reddit-2.0</Navbar.Brand>
                <Form inline>
                    <FormControl type={'text'} placeholder={'Subreddit Search'} className={'mr-sm-2'}
                                 onChange={e => setSub(e.target.value)} onKeyPress={
                        (e: any) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                fetchSubPosts(sub, top, count, setPosts, setShowError);
                            }
                        }
                    }/>
                    <Button variant={'outline-success'}
                            onClick={e => fetchSubPosts(sub, top, count, setPosts, setShowError)}>Search</Button>
                </Form>
                <Navbar.Text className={'ml-2 mr-1'}>Top:</Navbar.Text>
                <DropdownButton menuAlign={'left'} onSelect={(key: any, e) => setTop(key)} title={top}>
                    {Object.values(TopType).map(val => <Dropdown.Item as="button" eventKey={val}
                                                                      key={val}>{val}</Dropdown.Item>)}
                </DropdownButton>
                <Navbar.Text className={'ml-2 mr-1'}>Count:</Navbar.Text>
                <DropdownButton menuAlign={'left'} onSelect={(key: any, e) => setCount(parseInt(key))} title={count}>
                    <Dropdown.Item as={'button'} eventKey={"20"}>20</Dropdown.Item>
                    <Dropdown.Item as={'button'} eventKey={"40"}>40</Dropdown.Item>
                    <Dropdown.Item as={'button'} eventKey={"60"}>60</Dropdown.Item>
                    <Dropdown.Item as={'button'} eventKey={"80"}>80</Dropdown.Item>
                    <Dropdown.Item as={'button'} eventKey={"100"}>100</Dropdown.Item>
                </DropdownButton>
            </Navbar>
            <Container>
                {posts}
            </Container>
        </>
    );
}


/**
 * Fetches posts from the /sub endpoint and updates the setPosts state var with Post components
 * @param sub A string containing the name of the subreddit to query
 * @param topRange A string of the values defined in the TopType enum
 * @param count An int of the number of posts to query from a subreddit
 * @param setPosts A function to update the posts state variable
 */
const fetchSubPosts = async (sub: string, topRange: string, count: number, setPosts: Function, showError: Function) => {
    const request = new Request(`http://127.0.0.1:5000/sub/${sub}?top=${topRange}&count=${count}`, {method: 'GET'});
    // now fetch results from the subreddit endpoint
    const res = await fetch(request);
    if (!res.ok) {
        showError(true);
        return;
    }
    const json = await res.json();
    const posts: Array<PostResponse> = json.posts;
    const exchanged = posts.map(post => (
        <Row key={post.title} className={'p-1'}>
            <Col>
                <Post  postLink={post.redditLink} title={post.title}
                      extLink={post.externalURL} score={post.score} submitter={post.submitter}
                      isLinkPost={post.isLinkPost}/>
            </Col>
        </Row>
    ));
    setPosts(exchanged);
}


export default App;
