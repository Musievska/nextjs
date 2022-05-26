//square brac. [] in the file name is fow a dynamic page
//useRoutes is built in next hook

import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();
    const newsId = router.query.newsId;

    //send request to the backend api to fetch the news item with nesId

    return <h1>Detail Page</h1>
}

export default DetailPage;