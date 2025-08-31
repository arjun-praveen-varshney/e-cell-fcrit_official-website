import { type SchemaTypeDefinition } from "sanity";
import eventType from "./event";
import teamMemberType from "./teamMember";
import siteSettingsType from "./siteSettings";
import speaker from "./speaker";
import sponsor from "./sponsor";
import contactSubmission from "./contactSubmission";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    eventType,
    teamMemberType,
    siteSettingsType,
    speaker,
    sponsor,
    contactSubmission,
  ],
};
