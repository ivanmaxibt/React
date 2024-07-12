import { CartWidget } from "./CartWidget";

export const NavBar = () => (
    <>
        <h1>Resina en la Web</h1>
            <ul>
                <li>
                    <a href="#">Lapiceras Personalizadas</a>
                </li>
                <li>
                    <a href="#">Dijes</a>
                </li>
                <li>
                    <a href="#">Aros</a>
                </li>
                <li>
                    <a href="#">Pulseras</a>
                </li>
                <li>
                    <a href="#">Anillos</a>
                </li>
                <li>
                    <a href="#">Posavasos</a>
                </li>
                <li>
                    <a href="#">Señaladores de libros</a>
                </li>
                <li>
                    <a href="#">Llaveros</a>
                </li>
            </ul>
            <CartWidget />
    </>
)