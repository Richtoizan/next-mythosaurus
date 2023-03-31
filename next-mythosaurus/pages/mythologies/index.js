import Link from "next/link";

const Mythologies = () => {
    return (  
        <div>
            <h1>All Mythologies</h1>
            <Link href="/mythologies/greek">Greek</Link>
            <Link href="/mythologies/norse">Norse</Link>
        </div>

    );
}
 
export default Mythologies;