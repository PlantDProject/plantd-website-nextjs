export interface DropdownData {
    title: string;
    redirection: string;
}

export const AboutUs: DropdownData[] = [
    { title: 'Make an Impact Together', redirection: '../about/make-an-impact-together' },
    { title: 'Our Green initiative App', redirection: '../about/our-green-initiative-app' },
    { title: 'Reduce Your Carbon Footprint', redirection: '../about/reduce-your-carbon-footprint' },
    { title: 'Never Underestimate The Power of a Seed', redirection: '../about/never-underestimate-the-power-of-a-seed' },
    { title: 'Ambassadors', redirection: 'https://ambassador.plantd.life/' },
];


export const ProjectsList: DropdownData[] = [
    { title: 'Reforestation in Senegal', redirection: './projects/projectDetail?senegal-farming-and-reforestation' },
    { title: 'Reforestation in Texas', redirection: './projects/projectDetail?long-leaf-pine-reforestation' },
    { title: 'Reforestation in Louisiana', redirection: '../projects/projectDetail?louisiana-natural-disasters' },
    { title: 'Reforestation in California', redirection: '../projects/projectDetail?california-rim-wildfire' },
    { title: 'Reforestation in the Honduras', redirection: '../projects/projectDetail?climate-action-honduras' },
    { title: 'Reforestation in the Philippines', redirection: '../projects/projectDetail?climate-action-philippines' },
];