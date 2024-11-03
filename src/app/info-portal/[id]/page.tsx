import { Metadata } from "next";

import { TimeTracker } from "@/components/InfoProtalElements/SlugComponents/TimeTracker/TimeTracker";
import { MedicalApp } from "@/components/InfoProtalElements/SlugComponents/MedicalApp/MedicalApp";

import { SLUG_PATHS } from "@/enums/slug-paths";

import { FolderPageProps } from "@/types/folder-page";

import { getMetadata } from "@/fixtures/getMetadata/getMetadata";

const componentMapping: Record<string, JSX.Element> = {
  [SLUG_PATHS.TIME_TRACKER]: <TimeTracker />,
  [SLUG_PATHS.MEDICAL_APP]: <MedicalApp />,
};

export async function generateMetadata({
  params,
}: FolderPageProps): Promise<Metadata> {
  const { id } = await params;
  return getMetadata(id);
}

export default async function FolderPage({ params }: FolderPageProps) {
  const { id } = await params;
  const content = componentMapping[id] || <div>Content was not found</div>;

  return <>{content}</>;
}
