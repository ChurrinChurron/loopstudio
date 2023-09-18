import './CompStyles/CreationCard.css'

const CreationCard = () => {

  const cards = [
    {
        title: 'Deep Earth',
        imgMobile: 'public/mobile/image-deep-earth.jpg',
        imgDesktop: 'public/desktop/image-deep-earth.jpg',
    },
    {
        title: 'Night Arcade',
        imgMobile: 'public/mobile/image-night-arcade.jpg',
        imgDesktop: 'public/desktop/image-night-arcade.jpg',
    },
    {
        title: 'Soccer Team VR',
        imgMobile: 'public/mobile/image-soccer-team.jpg',
        imgDesktop: 'public/desktop/image-soccer-team.jpg',
    },
    {
        title: 'The Grid',
        imgMobile: 'public/mobile/image-grid.jpg',
        imgDesktop: 'public/desktop/image-grid.jpg',
    },
    {
        title: 'From Up Above VR',
        imgMobile: 'public/mobile/image-from-above.jpg',
        imgDesktop: 'public/desktop/image-from-above.jpg',
    },
    {
        title: 'Pocket Borealis',
        imgMobile: 'public/mobile/image-pocket-borealis.jpg',
        imgDesktop: 'public/desktop/image-pocket-borealis.jpg',
    },
    {
        title: 'The Curiosity',
        imgMobile: 'public/mobile/image-curiosity.jpg',
        imgDesktop: 'public/desktop/image-curiosity.jpg',
    },
    {
        title: 'Make It Fisheye',
        imgMobile: 'public/mobile/image-fisheye.jpg',
        imgDesktop: 'public/desktop/image-fisheye.jpg',
    }
  ]

  return (
    <div className="p-6 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-0 box md:mx-auto">
        {cards.map(card => {
            return <a href="#" key={card.title}>
                <div className="relative my-8 relative boxCard group">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={card.imgDesktop} />
                        <img src={card.imgMobile} alt="img Card Creations" />
                    </picture>
                    <h3 className="absolute bottom-4 left-4 uppercase text-white text-3xl w-36 font-light z-10 group-hover:text-black">{card.title}</h3>
                </div>
            </a>
        })} 
    </div>
  )
}

export default CreationCard