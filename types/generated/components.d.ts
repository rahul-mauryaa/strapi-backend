import type { Schema, Attribute } from '@strapi/strapi';

export interface CardsCompanyNumberSection extends Schema.Component {
  collectionName: 'components_cards_company_number_sections';
  info: {
    displayName: 'CompanyNumber Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    btn_text1: Attribute.String;
    btn_url1: Attribute.String;
    companyNumber: Attribute.Component<'general.head', true>;
  };
}

export interface CardsCompanyStorySection extends Schema.Component {
  collectionName: 'components_cards_company_story_sections';
  info: {
    displayName: 'CompanyStory Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    btn_text1: Attribute.String;
    btn_url1: Attribute.String;
    btn_text2: Attribute.String;
    btn_url2: Attribute.String;
  };
}

export interface CardsHeroSection extends Schema.Component {
  collectionName: 'components_cards_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    sliderItems: Attribute.Component<'general.section-items', true>;
  };
}

export interface CardsOverServicesSection extends Schema.Component {
  collectionName: 'components_cards_over_services_sections';
  info: {
    displayName: 'OverServices Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    btn_text1: Attribute.String;
    btn_url1: Attribute.String;
    testimonialsitems: Attribute.Component<'general.section-items1', true>;
  };
}

export interface CardsResourcesSection extends Schema.Component {
  collectionName: 'components_cards_resources_sections';
  info: {
    displayName: 'Resources Section';
    description: '';
  };
  attributes: {
    mainTitle: Attribute.String;
    groupNames: Attribute.Component<'general.resource-items', true>;
    resourcesDateItems: Attribute.Component<'general.date-items', true>;
  };
}

export interface CardsTabSection extends Schema.Component {
  collectionName: 'components_cards_tab_sections';
  info: {
    displayName: 'Tab Section';
    description: '';
  };
  attributes: {
    Head: Attribute.Component<'general.tabs-items'>;
    tabsItems: Attribute.Component<'general.blog-items', true>;
  };
}

export interface CardsTechnologySection extends Schema.Component {
  collectionName: 'components_cards_technology_sections';
  info: {
    displayName: 'Technology Section';
    description: '';
  };
  attributes: {
    section: Attribute.Component<'general.section-items', true>;
    head: Attribute.Component<'general.details'>;
  };
}

export interface CardsTestimonialsSection extends Schema.Component {
  collectionName: 'components_cards_testimonials_sections';
  info: {
    displayName: 'Testimonials Section';
    description: '';
  };
  attributes: {
    testimonialsitems: Attribute.Component<'general.testimonials-items', true>;
  };
}

export interface CardsTestimonialsSection1 extends Schema.Component {
  collectionName: 'components_cards_testimonials_section1s';
  info: {
    displayName: 'Testimonials Section1';
  };
  attributes: {
    testimonialsitems: Attribute.Component<'general.section-items1', true>;
  };
}

export interface GeneralBlogItems extends Schema.Component {
  collectionName: 'components_general_blog_items';
  info: {
    displayName: 'Blog Items';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    artical: Attribute.Relation<
      'general.blog-items',
      'oneToOne',
      'api::artical.artical'
    >;
  };
}

export interface GeneralButton extends Schema.Component {
  collectionName: 'components_general_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    btnText: Attribute.String;
    redirectTo: Attribute.String;
  };
}

export interface GeneralDateItems extends Schema.Component {
  collectionName: 'components_general_date_items';
  info: {
    displayName: 'Date Items';
  };
  attributes: {
    date: Attribute.Date;
    title: Attribute.String;
    subTitle: Attribute.String;
  };
}

export interface GeneralDetails extends Schema.Component {
  collectionName: 'components_general_details';
  info: {
    displayName: 'Head1';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface GeneralHead extends Schema.Component {
  collectionName: 'components_general_heads';
  info: {
    displayName: 'Head';
    description: '';
  };
  attributes: {
    highlightedTitleText: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface GeneralResourceItems extends Schema.Component {
  collectionName: 'components_general_resource_items';
  info: {
    displayName: 'Resource Items';
    description: '';
  };
  attributes: {
    groupName: Attribute.String;
    selectresource: Attribute.Relation<
      'general.resource-items',
      'oneToMany',
      'api::resources-item.resources-item'
    >;
  };
}

export interface GeneralSectionItems extends Schema.Component {
  collectionName: 'components_general_section_items';
  info: {
    displayName: 'Section Items';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    subtitle: Attribute.String;
  };
}

export interface GeneralSectionItems1 extends Schema.Component {
  collectionName: 'components_general_section_items1s';
  info: {
    displayName: 'Section Items1';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface GeneralSocialItems extends Schema.Component {
  collectionName: 'components_general_social_items';
  info: {
    displayName: 'Social Items';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    link: Attribute.String;
  };
}

export interface GeneralTabsItems extends Schema.Component {
  collectionName: 'components_general_tabs_items';
  info: {
    displayName: 'Tabs Head';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    commonimagetoggle: Attribute.Boolean;
    commonImage: Attribute.Media;
  };
}

export interface GeneralTestimonialsItems extends Schema.Component {
  collectionName: 'components_general_testimonials_items';
  info: {
    displayName: 'Testimonials Items';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    name: Attribute.String;
    position: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cards.company-number-section': CardsCompanyNumberSection;
      'cards.company-story-section': CardsCompanyStorySection;
      'cards.hero-section': CardsHeroSection;
      'cards.over-services-section': CardsOverServicesSection;
      'cards.resources-section': CardsResourcesSection;
      'cards.tab-section': CardsTabSection;
      'cards.technology-section': CardsTechnologySection;
      'cards.testimonials-section': CardsTestimonialsSection;
      'cards.testimonials-section1': CardsTestimonialsSection1;
      'general.blog-items': GeneralBlogItems;
      'general.button': GeneralButton;
      'general.date-items': GeneralDateItems;
      'general.details': GeneralDetails;
      'general.head': GeneralHead;
      'general.resource-items': GeneralResourceItems;
      'general.section-items': GeneralSectionItems;
      'general.section-items1': GeneralSectionItems1;
      'general.social-items': GeneralSocialItems;
      'general.tabs-items': GeneralTabsItems;
      'general.testimonials-items': GeneralTestimonialsItems;
    }
  }
}
