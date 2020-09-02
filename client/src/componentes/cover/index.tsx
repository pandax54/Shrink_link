import React, { useCallback, FormEvent, useState } from 'react';
// import { IconBaseProps } from 'react-icons';
import { Container, Logo, Content, Title, Subtitle, Input, Button, InputDiv } from './styles';
import api from '../../services/api';

interface UrlData {
    id: string;
    url: string;
    shortUrl: string;
    shortCode: string;
    views: number;
    created_at: Date;
    updated_at: Date;
}

const Cover: React.FC = () => {

    const [inputValue, setInputValue] = useState('')

    async function handleAddUrl(e: FormEvent) {
        e.preventDefault()

        const response = await api.post('/', {
            url: inputValue
        });

        const link: UrlData = response.data

        console.log(link)

        setInputValue(link.shortUrl)
    }

    return (
        <Container>
            <Logo />
            <Content>
                <Title>Shrink your link!</Title>
                <Subtitle>A long URL is always a problem. It's hard to remember and share.</Subtitle>
                <InputDiv onSubmit={handleAddUrl}>
                    <Input
                        placeholder="Paste the link to shrink it"
                        value={inputValue}
                        onChange={(e) => { setInputValue(e.target.value) }}
                    />
                    <Button type="submit">SHRINK</Button>
                </InputDiv>
            </Content>
        </Container>
    )
}

export default Cover;