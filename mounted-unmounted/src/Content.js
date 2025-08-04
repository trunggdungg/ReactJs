import React, { useEffect, useState } from 'react';

// 1.userEffect(callback)
// gọi callback sau khi component được re-render
// gọi callback sau khi element thêm vào DOM
// 2.userEffect(callback, [])
// 3.userEffect(callback, [dependencies])
// callback sẽ được gọi lại mỗi khi dependencies thay đổi

// 1.Callback luôn được gọi sau khi component mounted

const tabs = ['posts', 'comments', 'albums'];
function Content() {
    const [showContent, setShowContent] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGotoTop, setShowGotoTop] = useState(false)

    console.log(type)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGotoTop(true)
            } else {
                setShowGotoTop(false)
            }

            //setShowContent(window.scrollY >=200)
        }

        window.addEventListener('scroll', handleScroll)
        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (<div>
        {tabs.map(tab => (
            <button key={tab}
                style={type === tab ? {
                    fontWeight: 'bold',
                    color: 'red', backgroundColor: 'yellow'
                } : {}}
                onClick={() => setType(tab)}
            >
                {tab}
            </button>
        ))}
        <input value={showContent} onChange={(e) => setShowContent(e.target.value)} />
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
        </ul>
        {
            showGotoTop && (
                <button
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        padding: '10px 20px',
                        backgroundColor: 'blue',
                        color: 'white',
                        borderRadius: '5px'
                    }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Go to Top
                </button>
            )
        }
    </div>)
}

export default Content;