import { Metadata } from "next";
import Team from "@/components/Teams";
import SectionHeaderTop from "@/components/Common/SectionHeaderTop";
import {
  GensecData,
  IsecData,
  cdevTeamData,
  researchTeamData,
  acadesTeamData,
  interNationalTeamData,
  pclubTeamData,
  outreachTeamData,
  mediaTeamData,
} from "@/components/Teams/teamsData";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
};

const headerInfo = {
  title: "Meet the Team",
  subtitle: "The team behind AnC Council",
  description: `Our team is passionate and dedicated to making a positive impact on the campus community. We collaborate, using our diverse skills to address the needs of the campus junta and create a more inclusive environment for all.`,
};

export default function Home() {
  return (
    <main>
      <div className="mb-50 mt-50">
        <SectionHeaderTop headerInfo={headerInfo} />
      </div>
      <Team teamSectionData={GensecData} />
      <Team teamSectionData={IsecData} />
      <Team teamSectionData={cdevTeamData} />
      <Team teamSectionData={researchTeamData} />
      <Team teamSectionData={acadesTeamData} />
      <Team teamSectionData={interNationalTeamData} />
      <Team teamSectionData={pclubTeamData} />
      <Team teamSectionData={outreachTeamData} />
      <Team teamSectionData={mediaTeamData} />
    </main>
  );
}
