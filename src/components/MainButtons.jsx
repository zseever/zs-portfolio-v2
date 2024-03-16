export default function MainButtons() {
    function handleScroll(section) {
        document.getElementById(section).scrollIntoView({behavior: 'smooth'})
      }

    return (
        <div className='flex-col button-cont'>
            <button className="main-buttons" onClick={() => handleScroll('about')} >About</button>
            <button className="main-buttons" onClick={() => handleScroll('experience')}>Experience</button>
            <button className="main-buttons" onClick={() => handleScroll('projects')}>Projects</button>
        </div>
    )
}