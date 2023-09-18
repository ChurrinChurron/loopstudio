import './CompStyles/CreationCard.css'

const CreationCard = () => {

  const cards = [
    {
        title: 'Deep Earth',
        imgMobile: '/mobile/image-deep-earth.jpg',
        imgDesktop: '/desktop/image-deep-earth.jpg',
    },
    {
        title: 'Night Arcade',
        imgMobile: '/mobile/image-night-arcade.jpg',
        imgDesktop: '/desktop/image-night-arcade.jpg'
    },
    {
        title: 'Soccer Team VR',
        imgMobile: '/mobile/image-soccer-team.jpg',
        imgDesktop: '/desktop/image-soccer-team.jpg'
    },
    {
        title: 'The Grid',
        imgMobile: '/mobile/image-grid.jpg',
        imgDesktop: '/desktop/image-grid.jpg'
    },
    {
        title: 'From Up Above VR',
        imgMobile: '/mobile/image-from-above.jpg',
        imgDesktop: '/desktop/image-from-above.jpg'
    },
    {
        title: 'Pocket Borealis',
        imgMobile: '/mobile/image-pocket-borealis.jpg',
        imgDesktop: '/desktop/image-pocket-borealis.jpg'
    },
    {
        title: 'The Curiosity',
        imgMobile: '/mobile/image-curiosity.jpg',
        imgDesktop: '/desktop/image-curiosity.jpg'
    },
    {
        title: 'Make It Fisheye',
        imgMobile: '/mobile/image-fisheye.jpg',
        imgDesktop: '/desktop/image-fisheye.jpg'
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