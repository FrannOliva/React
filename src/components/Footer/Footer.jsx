import "./footer.css"

const Footer = () => {
    return(
        <footer>
            <div class="navFooter">
            <ul>
                <li class="tituloFooter">BARRA DE NAVEGACIÓN</li>
                <li><a>Inicio</a></li>
                <li><a>Nosotros</a></li>
                <li><a>Fragancias</a></li>
                <li><a>Contacto</a></li>
                <li><a>Preguntas frecuentes</a></li>
            </ul>
        </div>
        <div class="redesSociales">
            <ul>
                <li class="tituloFooter">REDES SOCIALES</li>
                <li><a target="_blank">Instagram</a></li>
                <li><a target="_blank">Twitter</a></li>
                <li><a target="_blank">Facebook</a></li>
                <li><a target="_blank">YouTube</a></li>
            </ul>
        </div>
        <div class="extra">
            <ul>
                <li class="tituloFooter">INFORMACIÓN NECESARIA</li>
                <li><a target="_blank">Newsletter</a></li>
                <li><a target="_blank">Política de devoluciones</a></li>
                <li><a target="_blank">Botón de arrepentimiento</a></li>
                <li><a target="_blank">Información de envíos</a></li>
            </ul>
        </div>
        </footer>
    )
}

export default Footer