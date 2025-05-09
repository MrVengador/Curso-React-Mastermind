import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    const format = (userName) => `@${userName}`;
    // const format = <span>@"JOJOS</span>;

    const [name, setName] = useState("JosephJoestar");

    const ChangeName = () => { setName("JoJo") } //Cambia el nombre a Jojo

    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={format} userName={"CaesarZeppeli 🇮🇹"} imageURL={"https://i.pinimg.com/736x/0b/b0/3e/0bb03eb43d58a73ac3dfbc289fa36f77.jpg"}>
                <strong>Caesar Zeppeli</strong>
                {/* Solo puede estar un children, en este ejemplo el nombre del usuario */}
            </TwitterFollowCard>

            <TwitterFollowCard formatUserName={format} userName={"LisaLisa 🇬🇧"} imageURL={"https://i.pinimg.com/736x/ec/bc/60/ecbc602aefebe1efd8535be33354b0bc.jpg"}>
                <strong>LisaLisa</strong>
            </TwitterFollowCard>

            <TwitterFollowCard formatUserName={format} userName={"Speedwagon 🇬🇧"} imageURL={"https://i.pinimg.com/474x/ae/02/ca/ae02ca40b591705c87ad687e051e05b3.jpg"}>
                <strong>Robert E. O. Speedwagon</strong>
            </TwitterFollowCard>

            <TwitterFollowCard formatUserName={format} userName={name} imageURL={"https://www.jammable.com/cdn-cgi/image/width=3840,quality=25,format=webp/https://imagecdn.voicify.ai/models/b9dcbe1c-d961-409e-8dee-0168cc8f6e54.png"}>
                <strong>Joseph Joestar</strong>
            </TwitterFollowCard>

            {/* <TwitterFollowCard formatUserName={format} userName={"Speedwagon 🇬🇧"} name={"Robert E. O. Speedwagon"} imageURL={"https://i.pinimg.com/474x/ae/02/ca/ae02ca40b591705c87ad687e051e05b3.jpg"}
                isFollowing /> */}

            <button onClick={ChangeName}>
                Change Name to JoJo
            </button>
        </section>
    )
}