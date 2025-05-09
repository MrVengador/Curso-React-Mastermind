
import { useState } from 'react';

export function TwitterFollowCard({ children, userName = "Unknow", imageURL, formatUserName }) {

    const [isFollowing, setIsFollowing] = useState(false);

    //   const state = userState(false);
    // const isFollowing = state[0];
    // const setIsFollowing = state[1];

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }


    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : "tw-followCard-button";

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                    src={imageURL}
                    alt="Caesar Zeppeli"
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'> {formatUserName(userName)} </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}