import FooterLink from "./FooterLink";
import InstagramLogo from '../../assets/img/Footer/instagram.svg'
import WhatsappLogo from '../../assets/img/Footer/whatsapp.svg'


const Footer = () => {

    return (
        <footer className="bg-slate-100 px-24 py-16 flex flex-row place-content-between items-start">
            <div className="flex flex-row">
                <div className="flex flex-col ">
                    <p className="uppercase text-sm pb-3">Conocénos</p>
                    <FooterLink href={"#"} text={"Productos"} />
                    <FooterLink href={"#"} text={"Sobre Nosotros"} />
                    <FooterLink href={"#"} text={"Preguntas frecuentes"} />
                </div>
                <div className="flex flex-col ml-24">
                    <p className="uppercase text-sm pb-3">Conectemos</p>
                    <FooterLink href={"#"} text={"Contacto"} />
                </div>
            </div>
            <div className="flex flex-row">
                <a href="#">
                    <img className='' src={InstagramLogo} alt="logo" />
                </a>
                <a href="">
                    <img className='ml-4 ' src={WhatsappLogo} alt="logo" />
                </a>
            </div>
        </footer>
    )
}
export default Footer;


