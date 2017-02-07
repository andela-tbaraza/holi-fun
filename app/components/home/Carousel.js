import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselInstance = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYTK_qaOpPpste27IfINV4qDo9KqY9Xh3r9OjPsMFuwjZYzOy7" />
        <Carousel.Caption>
          <h1>Holi-fun</h1>
          <p>Get holiday and vacation destinations that fit your interests</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroiwduJsUI_iSAyYV_ef1JG6C_EOdlmPbcTRhgYmq5-OqyL6CMA" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4-QBo85pGvwpeMFvUru9y0s40KGEhOeWW1xJXDqOjAQBccsSJ" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselInstance;
