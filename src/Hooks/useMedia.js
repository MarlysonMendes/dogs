import React from 'react'

const useMedia = (media) => {

    const [matches, setMatches] = React.useState(null);

    React.useEffect(() => {
        function changeMatches() {
            const {matches} = window.matchMedia(media);
            setMatches(matches);
        }
        window.addEventListener('resize', changeMatches);
        return () =>  {window.removeEventListener('resize', changeMatches); }
    },[media]);

    return matches;
}

export default useMedia
