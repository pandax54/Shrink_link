import React, { useEffect, useState } from 'react';
import { Container, Content, Title, ListContent, Ulr } from './styles';
import api from '../../services/api';

import heart from '../../assets/heart-emoji.png'
import twitter from '../../assets/twitter-logo.png'

interface UrlData {
    id: string;
    url: string;
    shortUrl: string;
    shortCode: string;
    views: number;
    created_at: Date;
    updated_at: Date;
}

const List: React.FC = () => {

    const [urls, setUrl] = useState<UrlData[]>([])

    useEffect(() => {
        api.get('/').then(response => {
            console.log(response.data)

            setUrl(response.data)
        })
    }, [])


    return (
        <Container>
            <Content>
                <Title>Top 5</Title>
                <ListContent>
                    {urls.map(url => {
                        return (
                            <Ulr key={url.id}>
                                <a target="_blank" href={url.shortUrl}>{url.shortUrl}</a>
                                <span>{url.views}</span>
                            </Ulr>
                        )
                    })}
                </ListContent>
            </Content>
            <footer>
                <div><p>Made with </p> <img src={heart} alt="" /> <p>by Interlink</p></div>
                <a href="www.twitter.com"><img src={twitter} alt="twitter" /></a>
            </footer>
        </Container>
    )
}

export default List;