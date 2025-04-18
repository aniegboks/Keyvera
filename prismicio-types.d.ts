// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomePageDocumentDataSlicesSlice =
  | FaqSlice
  | CtaSlice
  | MilestonesSlice
  | PropertiesSlice
  | RecentSlice
  | AboutSlice
  | HeroSlice;

/**
 * Content for homepage documents
 */
interface HomePageDocumentData {
  /**
   * title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice> /**
   * Meta Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomePageDocumentData>,
    "home_page",
    Lang
  >;

type PageDocumentDataSlicesSlice = AboutSlice | HeroSlice;

/**
 * Content for page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * link field in *Settings → navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * label field in *Settings → navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → cta*
 */
export interface SettingsDocumentDataCtaItem {
  /**
   * cta link field in *Settings → cta*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta[].cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * cta label field in *Settings → cta*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta[].cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;
}

/**
 * Item in *Settings → socials*
 */
export interface SettingsDocumentDataSocialsItem {
  /**
   * icons field in *Settings → socials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.socials[].icons
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icons: prismic.ImageField<never>;

  /**
   * icon link field in *Settings → socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.socials[].icon_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  icon_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Item in *Settings → legal*
 */
export interface SettingsDocumentDataLegaItem {
  /**
   * legal link field in *Settings → legal*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.lega[].legal_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  legal_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * legal label field in *Settings → legal*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.lega[].legal_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  legal_label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * site title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * meta description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * paragraph field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.paragraph
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * og image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * cta field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cta: prismic.GroupField<Simplify<SettingsDocumentDataCtaItem>>;

  /**
   * socials field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.socials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<SettingsDocumentDataSocialsItem>>;

  /**
   * legal field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.lega[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  lega: prismic.GroupField<Simplify<SettingsDocumentDataLegaItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | HomePageDocument
  | PageDocument
  | SettingsDocument;

/**
 * Item in *About → Default → Primary → links*
 */
export interface AboutSliceDefaultPrimaryLinksItem {
  /**
   * link field in *About → Default → Primary → links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.links[].about
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  about: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * label field in *About → Default → Primary → links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Primary content in *About → Default → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * caption field in *About → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.caption
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption: prismic.RichTextField;

  /**
   * links field in *About → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.links[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<AboutSliceDefaultPrimaryLinksItem>>;

  /**
   * history field in *About → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.history
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  history: prismic.RichTextField;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Primary content in *Cta → Default → Primary*
 */
export interface CtaSliceDefaultPrimary {
  /**
   * cta img field in *Cta → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.default.primary.cta_img
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cta_img: prismic.ImageField<never>;

  /**
   * cta heading field in *Cta → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.default.primary.cta_heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cta_heading: prismic.RichTextField;
}

/**
 * Default variation for Cta Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CtaSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Cta*
 */
type CtaSliceVariation = CtaSliceDefault;

/**
 * Cta Shared Slice
 *
 * - **API ID**: `cta`
 * - **Description**: Cta
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSlice = prismic.SharedSlice<"cta", CtaSliceVariation>;

/**
 * Item in *Faq → Default → Primary → faq*
 */
export interface FaqSliceDefaultPrimaryQuestionItem {
  /**
   * question field in *Faq → Default → Primary → faq*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.question[].question
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  question: prismic.RichTextField;

  /**
   * answer field in *Faq → Default → Primary → faq*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.question[].answer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  answer: prismic.RichTextField;
}

/**
 * Primary content in *Faq → Default → Primary*
 */
export interface FaqSliceDefaultPrimary {
  /**
   * heading field in *Faq → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * sub heading field in *Faq → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.sub_heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_heading: prismic.RichTextField;

  /**
   * paragraph field in *Faq → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * faq field in *Faq → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.question[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  question: prismic.GroupField<Simplify<FaqSliceDefaultPrimaryQuestionItem>>;
}

/**
 * Default variation for Faq Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FaqSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Faq*
 */
type FaqSliceVariation = FaqSliceDefault;

/**
 * Faq Shared Slice
 *
 * - **API ID**: `faq`
 * - **Description**: Faq
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSlice = prismic.SharedSlice<"faq", FaqSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * sub heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.sub_heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_heading: prismic.RichTextField;

  /**
   * body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → about hero → Primary*
 */
export interface HeroSliceAboutHeroPrimary {
  /**
   * heading field in *Hero → about hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.aboutHero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * body field in *Hero → about hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.aboutHero.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * image field in *Hero → about hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.aboutHero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * about hero variation for Hero Slice
 *
 * - **API ID**: `aboutHero`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceAboutHero = prismic.SharedSliceVariation<
  "aboutHero",
  Simplify<HeroSliceAboutHeroPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceAboutHero;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Milestones → Default → Primary → portfoilo*
 */
export interface MilestonesSliceDefaultPrimaryPortfoiloItem {
  /**
   * port heading field in *Milestones → Default → Primary → portfoilo*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: milestones.default.primary.portfoilo[].port_heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  port_heading: prismic.RichTextField;

  /**
   * port sub heading field in *Milestones → Default → Primary → portfoilo*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: milestones.default.primary.portfoilo[].port_sub_heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  port_sub_heading: prismic.RichTextField;

  /**
   * port paragraph field in *Milestones → Default → Primary → portfoilo*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: milestones.default.primary.portfoilo[].port_paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  port_paragraph: prismic.RichTextField;
}

/**
 * Primary content in *Milestones → Default → Primary*
 */
export interface MilestonesSliceDefaultPrimary {
  /**
   * heading field in *Milestones → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: milestones.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * sub heading field in *Milestones → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: milestones.default.primary.sub_heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_heading: prismic.RichTextField;

  /**
   * paragraph field in *Milestones → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: milestones.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * portfoilo field in *Milestones → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: milestones.default.primary.portfoilo[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  portfoilo: prismic.GroupField<
    Simplify<MilestonesSliceDefaultPrimaryPortfoiloItem>
  >;
}

/**
 * Default variation for Milestones Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MilestonesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MilestonesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Milestones*
 */
type MilestonesSliceVariation = MilestonesSliceDefault;

/**
 * Milestones Shared Slice
 *
 * - **API ID**: `milestones`
 * - **Description**: Milestones
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MilestonesSlice = prismic.SharedSlice<
  "milestones",
  MilestonesSliceVariation
>;

/**
 * Item in *Properties → Default → Primary → navigator*
 */
export interface PropertiesSliceDefaultPrimaryNavigatorItem {
  /**
   * link field in *Properties → Default → Primary → navigator*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.default.primary.navigator[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * label field in *Properties → Default → Primary → navigator*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.default.primary.navigator[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Properties → Default → Primary → image navigator*
 */
export interface PropertiesSliceDefaultPrimaryImageNavigatorItem {
  /**
   * display img field in *Properties → Default → Primary → image navigator*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.default.primary.image_navigator[].display_img
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  display_img: prismic.ImageField<never>;

  /**
   * display link field in *Properties → Default → Primary → image navigator*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.default.primary.image_navigator[].display_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  display_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * display label field in *Properties → Default → Primary → image navigator*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.default.primary.image_navigator[].display_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  display_label: prismic.KeyTextField;

  /**
   * scale field in *Properties → Default → Primary → image navigator*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.default.primary.image_navigator[].scale
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  scale: prismic.KeyTextField;

  /**
   * rooms field in *Properties → Default → Primary → image navigator*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.default.primary.image_navigator[].rooms
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  rooms: prismic.KeyTextField;

  /**
   * bath field in *Properties → Default → Primary → image navigator*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.default.primary.image_navigator[].bath
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bath: prismic.KeyTextField;
}

/**
 * Primary content in *Properties → Default → Primary*
 */
export interface PropertiesSliceDefaultPrimary {
  /**
   * heading field in *Properties → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * paragraph field in *Properties → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * navigator field in *Properties → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.default.primary.navigator[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigator: prismic.GroupField<
    Simplify<PropertiesSliceDefaultPrimaryNavigatorItem>
  >;

  /**
   * image navigator field in *Properties → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.default.primary.image_navigator[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  image_navigator: prismic.GroupField<
    Simplify<PropertiesSliceDefaultPrimaryImageNavigatorItem>
  >;
}

/**
 * Default variation for Properties Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PropertiesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PropertiesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Properties*
 */
type PropertiesSliceVariation = PropertiesSliceDefault;

/**
 * Properties Shared Slice
 *
 * - **API ID**: `properties`
 * - **Description**: Properties
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PropertiesSlice = prismic.SharedSlice<
  "properties",
  PropertiesSliceVariation
>;

/**
 * Item in *Projects → Default → Primary → navigator*
 */
export interface RecentSliceDefaultPrimaryNavigatorItem {
  /**
   * link field in *Projects → Default → Primary → navigator*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: recent.default.primary.navigator[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * label field in *Projects → Default → Primary → navigator*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recent.default.primary.navigator[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Projects → Default → Primary → image navigator*
 */
export interface RecentSliceDefaultPrimaryImageNavigatorItem {
  /**
   * display img field in *Projects → Default → Primary → image navigator*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: recent.default.primary.image_navigator[].display_img
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  display_img: prismic.ImageField<never>;

  /**
   * display link field in *Projects → Default → Primary → image navigator*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: recent.default.primary.image_navigator[].display_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  display_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * display text field in *Projects → Default → Primary → image navigator*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recent.default.primary.image_navigator[].display_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  display_text: prismic.KeyTextField;

  /**
   * display geo field in *Projects → Default → Primary → image navigator*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recent.default.primary.image_navigator[].display_geo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  display_geo: prismic.KeyTextField;
}

/**
 * Primary content in *Projects → Default → Primary*
 */
export interface RecentSliceDefaultPrimary {
  /**
   * heading field in *Projects → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recent.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * paragraph field in *Projects → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recent.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * navigator field in *Projects → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: recent.default.primary.navigator[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigator: prismic.GroupField<
    Simplify<RecentSliceDefaultPrimaryNavigatorItem>
  >;

  /**
   * image navigator field in *Projects → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: recent.default.primary.image_navigator[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  image_navigator: prismic.GroupField<
    Simplify<RecentSliceDefaultPrimaryImageNavigatorItem>
  >;
}

/**
 * Default variation for Projects Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RecentSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Projects*
 */
type RecentSliceVariation = RecentSliceDefault;

/**
 * Projects Shared Slice
 *
 * - **API ID**: `recent`
 * - **Description**: Recent
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecentSlice = prismic.SharedSlice<"recent", RecentSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomePageDocument,
      HomePageDocumentData,
      HomePageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      SettingsDocumentDataCtaItem,
      SettingsDocumentDataSocialsItem,
      SettingsDocumentDataLegaItem,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimaryLinksItem,
      AboutSliceDefaultPrimary,
      AboutSliceVariation,
      AboutSliceDefault,
      CtaSlice,
      CtaSliceDefaultPrimary,
      CtaSliceVariation,
      CtaSliceDefault,
      FaqSlice,
      FaqSliceDefaultPrimaryQuestionItem,
      FaqSliceDefaultPrimary,
      FaqSliceVariation,
      FaqSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceAboutHeroPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceAboutHero,
      MilestonesSlice,
      MilestonesSliceDefaultPrimaryPortfoiloItem,
      MilestonesSliceDefaultPrimary,
      MilestonesSliceVariation,
      MilestonesSliceDefault,
      PropertiesSlice,
      PropertiesSliceDefaultPrimaryNavigatorItem,
      PropertiesSliceDefaultPrimaryImageNavigatorItem,
      PropertiesSliceDefaultPrimary,
      PropertiesSliceVariation,
      PropertiesSliceDefault,
      RecentSlice,
      RecentSliceDefaultPrimaryNavigatorItem,
      RecentSliceDefaultPrimaryImageNavigatorItem,
      RecentSliceDefaultPrimary,
      RecentSliceVariation,
      RecentSliceDefault,
    };
  }
}
