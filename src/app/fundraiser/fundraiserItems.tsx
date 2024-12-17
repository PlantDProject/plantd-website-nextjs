export const projectData = [
    { image: `/next-images/fundraiser/Senegal_Reforestation_Project_Img.png`, stat:'2,500', statData: 'Number of women planting through all projects.🙎', name: 'Senegal Farming & Reforestation', url: "/contribute?project=senegal-farming-and-reforestation" },
    { image: `/next-images/fundraiser/Longleaf_Pine_Reforestation_Project_Img.png`, stat:'9,000', statData: 'Jobs will be provided.💼', name: 'Longleaf Pine Reforestation', url: "/contribute?project=long-leaf-pine-reforestation" },
    { image: `/next-images/fundraiser/Natural_Disaster_Reforestation.png`, stat:'2M+', statData: 'Trees will be planted.🌳',  name: 'Natural Disaster Reforestation', url: "/contribute?project=louisiana-natural-disasters" },
    { image: `/next-images/fundraiser/Rim_Wildfire_Restoration.png`, stat:'627,000', statData: 'Trees will be planted.🌳',  name: 'Rim Wildfire Restoration', url: "/contribute?project=california-rim-wildfire" },
    { image: `/next-images/fundraiser/Honduras_Project.png`, stat:'190+', statData: 'Employees empowered with fair wages.💼',  name: 'Honduras Reforestation', url: "/contribute?project=climate-action-honduras" },
    { image: `/next-images/fundraiser/Philippines_Project.png`, stat:'17%', statData: 'Of the population live below the poverty line.😧',  name: 'Philippines Reforestation', url: "/contribute?project=climate-action-philippines" },
];

export interface projectDataInterface {
    image: string;
    stat: string;
    statData: string;
    name: string;
    url: string;
}