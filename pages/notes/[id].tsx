import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <Link href="/notes">
                <a>Notes</a>
            </Link>
            <h1>Note: {id}</h1>
        </div>
    )
};
