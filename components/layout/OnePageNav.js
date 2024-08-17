import Link from "next/link";

export default function OnePageNav() {
    return (
        <>
            <ul>
                <li className="active menu-thumb">
                    <Link href="/index-one-page">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#service">Services</Link>
                </li>
                <li>
                    <Link href="#project">Projects</Link>
                </li>
                <li>
                    <Link href="#team">Team</Link>
                </li>
                <li>
                    <Link href="#blog">Blog</Link>
                </li>
            </ul>
        </>
    );
}
