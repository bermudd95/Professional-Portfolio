import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Projects = () => {
  return (
    <>
        <div className='flex align-center justify-center text-center pt-3 bg-primary'>
            <h2 className='fw-bold'>
                Projects
            </h2>
            <h3 className='pt-4 pb-2'>
                Completed projects:
            </h3>
            <Carousel className='m-5' variant="dark">
                <Carousel.Item>
                    <a href='https://bermudd95.github.io/Movie-app/'>
                        <img
                            className="d-block w-100 h-40"
                            src='https://repository-images.githubusercontent.com/545208464/32753419-8338-4ce9-848c-3e9ff240b05e'
                            alt="Movie-app"
                        />
                    </a>    
                    <Carousel.Caption class='text-white bg-black rounded'>
                        <h3>
                            Movie.app
                        </h3>
                        <p>
                            A movie application that allows the user to search up their favorite movies using a search bar. They will receive information such as release date, movie title, and a brief description of the movie.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://bermudd95.github.io/Snake-app/'>
                        <img
                            className="d-block w-100 h-50"
                            src='https://repository-images.githubusercontent.com/548457414/d0643b77-24df-4f47-b5cb-1f067f0569a9'
                            alt="Snake-app"
                        />
                    </a>
                    <Carousel.Caption className='bg-black text-white rounded'>
                        <h3>
                            Snake.app
                        </h3>
                        <p>
                            A Snake application that allows the user to control the snake using the directional buttons on the keyboard. The application also tracks high scores for some competition amongst friends.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://bermudd95.github.io/Weather-App/'>
                        <img
                            className="d-block w-100 h-50"
                            src="https://repository-images.githubusercontent.com/548468894/85795baf-83b9-4690-a870-6b844b8771aa"
                            alt="Weather-app"
                        />
                    </a>
                    <Carousel.Caption className='bg-black text-white rounded'>
                        <h3>
                            Weather.app
                        </h3>
                        <p> 
                            A weather application that allows the user to look up the weather of their location using a search bar. They would receive various information such as wind speed, humidity, and feels like temperature.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://bermudd95.github.io/Youview-app/'>
                    <img
                        className="d-block w-100 h-50"
                        src="https://repository-images.githubusercontent.com/556975408/9289575e-42f9-4d24-bdc7-068e22df5ad0"
                        alt="Youtube-clone"
                    />
                    </a>
                    <Carousel.Caption className='bg-black text-white rounded'>
                        <h3>
                            YouView.app
                        </h3>
                        <p> 
                            A YouTube clone application named "YouView". It allows the user to search up and play their favorite videos as well as filter out the feed using the category buttons.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </>
  )
}

export default Projects