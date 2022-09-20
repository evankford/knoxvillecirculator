import React from "react";
import SectionOuter from "../components/layouts/SectionOuter";
import styled from "styled-components";
import Image from "gatsby-plugin-sanity-image";

import EventDetail, {type EventDetailProps}  from "../components/elements/eventDetail";
import {PortableText} from '@portabletext/react';

const HeroOuter= styled.header`
  display: flex;
  min-height: 400px;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  justify-content: center;
  padding: 20px;
  @media screen and (min-width: 750px) {
    max-width: 80vw;
  }
`

const Pic=styled.picture`
  margin: 60px;
  flex: 1 1 300px;
  max-width: 500px;
  img{
    max-height: 500px;
    width: 100%;
    object-fit: contain;
    height: auto;
    object-position: 50% 50%;
  }
`

const HeroContent = styled.div`
  text-align: left;

  p{
    font-size:  20px;
  }
  flex: 1 1 500px;
`

const HeroTitle = styled.h1`
  font-weight: 700;
`

const HeroSubtitle= styled.h3`
  font-weight: 300;
`

const HeroEvents= styled.div`
  flex: 1 1 400px;
  margin:  auto auto 50px;
`
interface EventBannerProps {
  color?: string
  image:any | undefined
  blurb:any | undefined
  title: string| null| undefined
  subtitle: string| null| undefined
  events: EventDetailProps[]
}

export default function EventBanner(props:EventBannerProps) {
  return (
    <SectionOuter background={props.color ? props.color : "var(--color-lightGray)"}>
        <HeroOuter>
          {props.image &&
            <Pic>
              <Image width={500} {...props.image}/>
            </Pic>
          }
          <HeroContent>
            {props.title &&
              <HeroTitle>{props.title}</HeroTitle>
            }
            {props.subtitle &&
              <HeroSubtitle>{props?.subtitle}</HeroSubtitle>
            }
            {props.blurb &&
                <PortableText
                value={props.blurb}
              />
            }
            </HeroContent>
            {props.events.length > 0 &&
              <HeroEvents>
                {props.events.map(event=>(
                  <EventDetail {...event} />
                )

                )}
              </HeroEvents>
            }
        </HeroOuter>
      </SectionOuter>
  )
}