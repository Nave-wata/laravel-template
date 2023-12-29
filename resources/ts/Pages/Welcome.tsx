import React from 'react';
import { Head } from '@inertiajs/react';
import { type PageProps } from '@/types';
import { Typography } from '@mui/material';

export default function Welcome ({ title, subject }: PageProps<{ title: string, subject: string }>): JSX.Element {
    return (
        <>
            <Head title={title} />
            <Typography variant="h1">{subject}</Typography>
        </>
    );
}
