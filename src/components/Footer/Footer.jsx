import InstagramLogo from '../../assets/img/Footer/instagram.svg'
import FacebookLogo from '../../assets/img/Footer/facebook.svg'
import TripAdLogo from '../../assets/img/Footer/TripAd.svg'


const Footer = () => {

    return (
        <footer className="bg-verdeOscuroTognis flex justify-center items-center py-6 gap-6 border-t border-negroTognis/20">
            <p className='text-white text-sm'>Blanco encalada 1665</p>
            <p className='text-white text-sm'>•</p>
            <p className='text-white text-sm'>+54 9 11 3337 9113</p>
            <p className='text-white text-sm'>•</p>
            <img className='h-4' src={InstagramLogo} alt="logo" />
            <img className='h-4' src={FacebookLogo} alt="logo" />
            <img className='h-4' src={TripAdLogo} alt="logo" />
        </footer>
    )
}
export default Footer;


