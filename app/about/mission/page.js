
import Button from "@/app/components/Button";
import thumb from "@/public/images/nextP.png";
import Image from "next/image";

export const metadata = {
    title: "Mission",
    description: "This is a blog mission page",
};

export default function Mission () {
    return (
        <main  className="mt-10">
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, 
            </div>

            <Image placeholder="blur" src={thumb} alt="Thumbnail"/>
            
            <Button/>
        </main>
    )
}