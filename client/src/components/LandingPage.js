import React from 'react';

import luffyImage from '../assets/images/luffy.png';
import PopularAnimeList from './PopularAnimeList';

const LandingPage = () => (
	<div className='landing-container'>
		<section className='container landing-intro-section'>
			<div className='landing-para'>
				<p>
					Gain streaming access to thousands of animes, with nothing more than a{' '}
					<span className='gmail-span'>Gmail</span> account!
				</p>
			</div>
			<div className='landing-image-intro'>
				<img src={luffyImage} className='anime-image' alt='luffy character' />
			</div>
		</section>

		<section className='landing-anime-selection'>
			<PopularAnimeList />
		</section>
	</div>
);

export default LandingPage;
