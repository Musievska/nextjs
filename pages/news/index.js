//our-domain.com/news
//folders in pages also act as path segments!!!
//our-domein.com/news/something important => we need to create a subfolder and then create a new file which is subling to index.js in folder news
//to display a list of new items   

import { Fragment } from 'react';
import Link from 'next/link'

function NewsPage() {
    return (
        <Fragment>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href="news/news-item-n1">
                        news item n1
                    </Link>
                    <li>
                        news item n2
                    </li>
                </li>
            </ul>
            </Fragment>
            );
            }

export default NewsPage;