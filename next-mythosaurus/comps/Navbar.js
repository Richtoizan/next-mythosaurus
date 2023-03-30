import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Mythosaurus</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/greek">Greek</Link>
            <Link href="/norse">Norse</Link>
        </nav>
    );
}
 
export default Navbar;