import React from 'react';
import HeroArea from './_UI/HeroArea';
import { JobCard } from './../Jobs/_UI/JobCard';
import { useState } from 'react';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    return (
        <section className="container mx-auto">
            <HeroArea />
            <Jobs />
        </section>
    );
};

export default Home;