import { type SchemaTypeDefinition } from "sanity";

import eventType from "./event";
import teamMemberType from "./teamMember";
import testimonialType from "./testimonial";
import siteSettingsType from "./siteSettings";
import linkedinPost from "../schemas/linkedinPost";

export const schema = {
  types: [
    eventType,
    teamMemberType,
    testimonialType,
    siteSettingsType,
    linkedinPost,
  ],
};
