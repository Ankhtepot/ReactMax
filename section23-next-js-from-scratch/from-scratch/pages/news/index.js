import Link from 'next/link';

function NewsPage() {
    return(
        <>
            <h1>News Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link href='/news/nextJS-is-a-great-framework'>NextJS Is a Great Framework</Link>
                    </li>
                    <li>
                        Something else
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NewsPage;