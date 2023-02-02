import { Box } from "@chakra-ui/react";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const myProjects = [
  {
    name: "Bornoz Bank",
    image:
      "https://user-images.githubusercontent.com/83987715/199247186-d0b2b54e-8275-4208-b85c-0aa3cb64dc96.jpeg",
    link: "https://github.com/pato-1441/bornozBank",
  },
  {
    name: "Bornoz Shows",
    image:
      "https://user-images.githubusercontent.com/83987715/200133740-f27eee0c-ca5b-4518-8966-8a9943be813a.jpeg",
    link: "https://github.com/pato-1441/bornozShows",
  },
  {
    name: "Bornoz Fly",
    image:
      "https://raw.githubusercontent.com/pato-1441/bornozFly/main/public/image-6.png",
    link: "https://github.com/pato-1441/bornozFly",
  },
  {
    name: "Marvel Wiki",
    image:
      "https://i.annihil.us/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg",
    link: "https://github.com/TimoteoGambella/Marvel-Project-Vercel",
  },
  {
    name: "Search Synonyms",
    image:
      "https://user-images.githubusercontent.com/83987715/216335172-9f0f296d-b2e9-4f12-b55f-cde59b35ef4f.png",
    link: "https://github.com/pato-1441/searchSynonyms",
  },
  {
    name: "Old Portfolio",
    image:
      "https://user-images.githubusercontent.com/83987715/199248672-33f77843-bc2b-4ff1-8c10-7854e57df06d.png",
    link: "https://github.com/pato-1441/portfolio",
  },
];

const Projects = () => {
  return (
    <Box className="flex flex-col px-6">
      <h1 className="text-4xl">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-6">
        {myProjects.map((e) => (
          <ProjectsCard name={e.name} image={e.image} link={e.link} />
        ))}
      </div>
    </Box>
  );
};

export default Projects;
