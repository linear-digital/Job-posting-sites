import React from 'react';
import HeroArea from './_UI/HeroArea';

import Jobs from '../Jobs/Jobs';
import Footer from '../Footer/Footer';

const Home = () => {
    const [filters, setFilters] = React.useState('');
    return (
        <section className="container mx-auto">
            <HeroArea setFilters={setFilters}/>
            <Jobs filters={filters}/>
        </section>
    );
};

export default Home;