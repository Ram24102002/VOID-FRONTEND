import React from 'react'
import AnimeHeroImg from '../../assets/AnimeHero_Demonslayer_RedAndBlue.jpg'
import AnimeHeroImgMobile from '../../assets/AnimeHero_Demonslayer_RedAndBlue_Mobile.jpg'





function AnimeHero() {




return (
    <div className="flex items-center justify-center min-h-screen relative">
        {/* Laptop */}
        <div
            className="hero hidden lg:block w-full min-h-screen relative"
            style={{
                position: 'relative',
            }}
        >
            <img
                src={AnimeHeroImg}
                alt="Anime Hero"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(60%)', zIndex: 0 }}
            />
            <div className="hero-content text-neutral-content text-center flex items-center justify-center min-h-screen relative" style={{ zIndex: 1 }}>
                <div className="max-w-md mx-auto">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-error text-white">Get Started</button>
                </div>
            </div>
        </div>

        {/* Mobile */}
        <div
            className="hero lg:hidden w-full min-h-screen relative"
            style={{
                position: 'relative',
            }}
        >
            <img
                src={AnimeHeroImgMobile}
                alt="Anime Hero Mobile"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(60%)', zIndex: 0 }}
            />
            <div className="hero-content text-neutral-content text-center flex items-center justify-center min-h-screen relative" style={{ zIndex: 1 }}>
                <div className="max-w-md mx-auto">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-error text-white">Get Started</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default AnimeHero