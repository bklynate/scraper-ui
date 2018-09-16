import React from 'react';

import luffyImage from '../assets/images/luffy.png';
import PopularAnimeList from './PopularAnimeList';

const LandingPage = () => (
	<div className='landing-container'>
		<section className='container landing-intro-section'>
			<div className='landing-para'>
				<p>Gain access to thousands of animes, with nothing more than a <span className="gmail-span">Gmail</span> account!</p>
			</div>
			<div className='landing-image-intro'>
				<img src={luffyImage} className='anime-image' alt='luffy character' />
			</div>
    </section>
    
    <section className='landing-anime-selection'>
      <PopularAnimeList />
      <div>
        <h1>Hi 1</h1>
        <p>some text 1</p>
      </div>
      <div>
        <h1>Hi 2</h1>
        <p>some text 2</p>
      </div>
      <div>
        <h1>Hi 3</h1>
        <p>some text 3</p>
      </div>
    </section>
	</div>
);

export default LandingPage;
