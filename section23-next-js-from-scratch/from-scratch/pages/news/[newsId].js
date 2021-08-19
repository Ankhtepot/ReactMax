import { useRouter } from 'next/router';

function DetailsPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    //send a request to the backend API

    return(
        <>
            <h1>Details Page: {newsId}</h1>
        </>
    );
}

export default DetailsPage;