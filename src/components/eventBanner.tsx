import SectionOuter from "../../components/layouts/SectionOuter";
import styled from "styled-components";

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


export default function EventBanner(props) {
  return (
    <SectionOuter background="var(--color-lightGray);">
        <HeroOuter>
          {data.sanityEvent?._rawImage &&
            <Pic>
              <Image width={500} {...data.sanityEvent._rawImage}/>
            </Pic>
          }
          <HeroContent>
            {data.sanityEvent?.title &&
              <HeroTitle>{data.sanityEvent?.title}</HeroTitle>
            }
            {data.sanityEvent?.subtitle &&
              <HeroSubtitle>{data.sanityEvent?.subtitle}</HeroSubtitle>
            }
            {data.sanityEvent?._rawBlurb &&
                <PortableText
                value={data.sanityEvent._rawBlurb}
              />
            }
            </HeroContent>
            {events.length > 0 &&
              <HeroEvents>
                {events.map(event=>(
                  <EventDetail {...event} />
                )

                )}
              </HeroEvents>
            }
        </HeroOuter>
      </SectionOuter>
  )
}