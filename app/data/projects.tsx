export interface ProjectsDTO {
    id: number;
    year: number;
    title: string;
    href: string;
    technos: TechnosDTO[];
}

export interface TechnosDTO {
    color: string;
    label: string;
}

const FIGMA_COLOR = "#60CC89";
const NEXT_COLOR = "#FFFFFF";
const NODE_COLOR = "#669C4F";
const REACT_COLOR = "#62D5FA";
const STORYBOOK_COLOR = "#E65482";
const STRIPE_COLOR = "#995DF6";

const REACT_NAME = "ReactJS";
const NEXT_NAME = "NextJS";
const NODE_NAME = "NodeJS";
const FIGMA_NAME = "Figma";
const STORYBOOK_NAME = "Storybook";
const STRIPE_NAME = "Stripe";

export const projects: ProjectsDTO[] = [
    {
        id: 1,
        year: 2023,
        title: "Comptheures",
        href: "https://comptheures.fr",
        technos: [
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: NODE_COLOR, label: NODE_NAME},
            {color: FIGMA_COLOR, label: FIGMA_NAME},
            {color: STORYBOOK_COLOR, label: STORYBOOK_NAME},
        ],
    },
    {
        id: 2,
        year: 2022,
        title: "Boutique du Club de BMX de Verrières le Buisson",
        href: "https://shop-vb-bmx.pages.dev/",
        technos: [
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: NODE_COLOR, label: NODE_NAME},
            {color: STRIPE_COLOR, label: STRIPE_NAME},
            {color: FIGMA_COLOR, label: FIGMA_NAME},
            {color: STORYBOOK_COLOR, label: STORYBOOK_NAME},
        ],
    },
    {
        id: 3,
        year: 2023,
        title: "Masteries Biscotte Family",
        href: "https://masteries.biscottefamily.fr",
        technos: [
            {color: REACT_COLOR, label: REACT_NAME},
            {color: NODE_COLOR, label: NODE_NAME},
            {color: FIGMA_COLOR, label: FIGMA_NAME},
        ],
    },
    {
        id: 4,
        year: 2022,
        title: "Bonappli",
        href: "https://bonappli.fr",
        technos: [
            {color: REACT_COLOR, label: REACT_NAME},
            {color: NODE_COLOR, label: NODE_NAME},
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: FIGMA_COLOR, label: FIGMA_NAME},
        ],
    },
];