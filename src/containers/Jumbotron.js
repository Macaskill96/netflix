import React from 'react';
import jumboData from '../fixtures/jumbo.json'
import {Jumbotrone} from "../components";

export function JumbotronContainer () {
    return (
        <div>
            <Jumbotrone.Container>
                {
                    jumboData.map((item) => (
                        <Jumbotrone key ={item.id} direction={item.direction}>

                            <Jumbotrone.Pane>
                                <Jumbotrone.Title>{item.title}</Jumbotrone.Title>
                                <Jumbotrone.SubTitle>{item.subTitle}</Jumbotrone.SubTitle>
                            </Jumbotrone.Pane>

                            <Jumbotrone.Pane>
                                <Jumbotrone.Image src={item.image} alt={item.alt} />
                            </Jumbotrone.Pane>

                        </Jumbotrone>
                    ))
                }
            </Jumbotrone.Container>
        </div>
    );
};

