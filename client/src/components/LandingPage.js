import React from 'react';

import luffyImage from '../assets/images/luffy.png';
import dekuImage from '../assets/images/deku.png';
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
				<img src={luffyImage} className='anime-image' alt='anime character luffy' />
			</div>
		</section>

		<section className='landing-popular-anime-section'>
			<PopularAnimeList />
		</section>

		<section className='landing-end-section'>
			<div className='landing-image-final'>
				<img src={dekuImage} alt='anime character deku' />
			</div>
		</section>
	</div>
);

export default LandingPage;
