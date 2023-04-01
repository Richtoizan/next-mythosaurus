import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={128} height={128} />
                <h1>Mythosaurus</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/greek">Greek</Link>
            <Link href="/norse">Norse</Link>
        </nav>
    );
}
 
export default Navbar;