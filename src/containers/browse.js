import {SelectProfileContainer} from "./profiles";
import {FirebaseContext} from "../context/firebase";
import React, {useContext, useEffect, useState} from "react";
import Fuse from "fuse.js";
import {FooterContainer} from "./Footer";
import {Header, Loading, Card, Player} from '../components'
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";



export function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('series');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    console.log(slides)

    useEffect(()=> {
        const fuse = new Fuse(slideRows, {keys:['data.description', 'data.title', 'data.genre']});
        const result = fuse.search(searchTerm).map(({item}) => item)
        if (slideRows.length > 0 && searchTerm.length > 0 && result.length > 0) {setSlideRows(result)}
        else {setSlideRows(slides[category])};
    }, [searchTerm])

    return profile.displayName ? (
        <>
            {loading ?
                <Loading src = {user.photoURL} />
             : <Loading.ReleaseBody/>}
            <Header src='joker1' dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} alt={'Netflix'} src={logo} />
                        <Header.TextLink
                            active = {category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >Series</Header.TextLink>
                        <Header.TextLink
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search
                            searchTerm = {searchTerm}
                            setSearchTerm = {setSearchTerm}
                        />
                        <Header.Profile>
                            <Header.Picture src = {user.photoURL}/>
                            <Header.Dropdown>
                                <Header.Picture src={user.photoURL}/>
                                <Header.TextLink>
                                    {user.displayName}
                                </Header.TextLink>
                                <Header.Group>
                                    <Header.TextLink onClick={()=> firebase.auth().signOut()}>Sign Out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallout>Watch Joker now</Header.FeatureCallout>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.
                        Arthur wears two masks -- the one he paints for this day job as clown, and the guise
                        he projects in a futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {Array.from(new Set(slideItem.data.map(item => item.slug))).slice(0, 5).map(slug => {
                                const item = slideItem.data.find(item => item.slug === slug);
                                return (
                                    <Card.Item key={item.docId} item={item}>
                                        <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                        <Card.Meta>
                                            <Card.SubTitle>{item.title}</Card.SubTitle>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Meta>
                                    </Card.Item>

                                );
                            })}
                        </Card.Entities>
                        <Card.Feature category={category}>
                           <Player>
                               <Player.Button/>
                               <Player.Video src='videos/videos/bunny.mp4'/>
                           </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
            <FooterContainer/>
        </>
    ) : (    <SelectProfileContainer user={user} setProfile={setProfile}/>
    )
}


