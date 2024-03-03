import Link from "next/link";

export default function Meals() {
    return (
        <section>
            <h1>Meals</h1>
            <ul>
                <li><Link href='/meals/pizza'>Pizza</Link></li>
                <li><Link href='/meals/chiken'>Chiken</Link></li>
            </ul>
        </section>
    )
}