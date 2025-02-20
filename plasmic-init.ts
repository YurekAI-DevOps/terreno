import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "4wbRJu4GP4fPSDo1oW7E9c";
export const projectApiToken = "UhsuYFi6dHcCXnozVryM6qAQGloWL0JPLrlR5OItlJreOufKluE8yD25qXeqXRY4v49KUFtiD7wfeufKl7DyQ";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
