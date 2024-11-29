export interface DropdownData {
    name: string;
    slug: string;
    bannerImage: string;
}

export const aboutUsData: DropdownData[] = [
    {
        name: 'Make an Impact Together',
        slug: 'make-an-impact-together',
        bannerImage: '/next-images/menu/about-1.png',
    },
    {
        name: 'Reduce your Carbon Footprint',
        slug: 'reduce-your-carbon-footprint',
        bannerImage: '/next-images/menu/about-2.png',
    },
    {
        name: 'Newer Underestimate The Power Of a Seed',
        slug: 'never-underestimate-the-power-of-a-seed',
        bannerImage: '/next-images/menu/about-3.png',
    },
    {
        name: 'Our Green Initiative',
        slug: 'our-green-initiative-app',
        bannerImage: '/next-images/menu/about-4.png',
    },
];

export const solutionsData: DropdownData[] = [
    {
        name: 'For Individuals',
        slug: '/individual',
        bannerImage: '/next-images/menu/solutions/individual.png',
    },
    {
        name: 'Sustainable Fundraising',
        slug: '/fundraiser',
        bannerImage: '/next-images/menu/solutions/fundraiser.png',
    },
    {
        name: 'Become an Ambassador',
        slug: '/ambassador',
        bannerImage: '/next-images/menu/solutions/ambassador.png',
    },
    {
        name: 'For Business',
        slug: '/business',
        bannerImage: '/next-images/menu/solutions/business.png',
    },
    {
        name: 'Plant Globally',
        slug: '/contribute',
        bannerImage: '/next-images/menu/solutions/global.png',
    },
];
