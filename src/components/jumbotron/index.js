import React from "react";
import {Container, Inner, Pane, Item, Image, Title, SubTitle} from "./styles/jumbotrone";

export default function Jumbotrone ({ children ,direction = 'row', ...restProps}) {
    return (
        <Item  {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
};

Jumbotrone.Container = function JumbotroneContainer ({children, ...restProps}) {
    return <Container {...restProps}> {children}</Container>
};

Jumbotrone.Pane = function JumbotronePane ({children, ...restProps}) {
    return <Pane {...restProps}> {children}</Pane>
};

Jumbotrone.Title = function JumbotroneTitle ({children, ...restProps}) {
    return <Title {...restProps}> {children}</Title>
};

Jumbotrone.SubTitle = function JumbotroneSubTitle ({children, ...restProps}) {
    return <SubTitle {...restProps}> {children}</SubTitle>
};

Jumbotrone.Image = function JumbotroneImage ({children, ...restProps}) {
    return <Image {...restProps} />
}